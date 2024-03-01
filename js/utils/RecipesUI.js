function buildProfessionsMenu() {
    const professions = recipesManager.getAllProfessions();
    const menuContainer = document.getElementById('professionsMenu');

    professions.forEach(profession => {
        const normalizedProfessionId = profession.replace(/\s+/g, '-'); // Normaliza o ID da profissão
        const groups = recipesManager.getGroupsByProfession(profession);

        // Criar o elemento do menu de profissões diretamente
        const professionMenuItem = document.createElement('a');
        professionMenuItem.href = `#${normalizedProfessionId}Subcategories`; // Usa o ID normalizado
        professionMenuItem.className = 'list-group-item list-group-item-action';
        professionMenuItem.dataset.toggle = 'collapse';
        professionMenuItem.setAttribute('aria-expanded', 'false');
        professionMenuItem.setAttribute('aria-controls', `${normalizedProfessionId}Subcategories`); // Usa o ID normalizado
        professionMenuItem.textContent = profession;
        menuContainer.appendChild(professionMenuItem);

        // Criar o container do submenu de grupos diretamente
        const groupSubmenuContainer = document.createElement('div');
        groupSubmenuContainer.className = 'collapse';
        groupSubmenuContainer.id = `${normalizedProfessionId}Subcategories`; // Usa o ID normalizado
        menuContainer.appendChild(groupSubmenuContainer);

        groups.forEach(group => {
            const groupMenuItem = document.createElement('a');
            groupMenuItem.href = '#';
            groupMenuItem.className = 'list-group-item list-group-item-action text-muted-custom bg-gray';
            groupMenuItem.textContent = group;
            groupMenuItem.addEventListener('click', () => displayRecipesByGroup(profession, group));
            groupSubmenuContainer.appendChild(groupMenuItem);
        });
    });
}

function displayRecipesByGroup(profession, group) {
    const recipesMenu = document.getElementById('recipesMenu');
    recipesMenu.innerHTML = '';

    const filteredRecipes = recipesManager.getItemsByProfessionAndGroup(profession, group);
    filteredRecipes.forEach(recipe => {
        const recipeItem = document.createElement('li');
        recipeItem.className = 'list-group-item list-group-item-action text-muted-custom';
        recipeItem.textContent = recipe.name;
        recipeItem.addEventListener('click', () => renderRecipeDetails(recipe.name));
        recipesMenu.appendChild(recipeItem);
    });
}

function renderRecipeDetails(recipeName, depth = 0, parentElement = null) {
    const recipe = recipesManager.getRecipe(recipeName);
    if (!recipe) return;

    const container = depth === 0 ? document.getElementById('recipeDetails') : parentElement;
    if (depth === 0) {
        container.innerHTML = '';
        container.setAttribute('data-recipe-name', recipeName);

        const labelName = document.createElement('div');

        labelName.className = 'd-flex justify-content-between align-items-center';
        const recipeNameSpan = document.createElement('span');
        recipeNameSpan.className = 'font-weight-bold mb-3';
        recipeNameSpan.textContent = `Receita para fazer ${recipeName}`;
    
        labelName.appendChild(recipeNameSpan);
        container.appendChild(labelName);
    }

    Object.entries(recipe.requirements).forEach(([itemName, quantity]) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'd-flex justify-content-between align-items-center mt-2';

        const textSpan = document.createElement('span');
        textSpan.className = 'col-md-8';
        textSpan.innerHTML = '&nbsp;'.repeat(depth * 4) + `${quantity} x ${itemName}`;
        itemDiv.appendChild(textSpan);

        const priceInput = document.createElement('input');
        priceInput.type = 'number';
        const item = itemsManager.getItem(itemName);
        if (item) {
            priceInput.value = item.marketValue;
        }
        priceInput.className = 'form-control col-md-4 item-price-input';
        priceInput.setAttribute('data-item-name', itemName);

        priceInput.addEventListener('change', function() {
            document.querySelectorAll(`.item-price-input[data-item-name="${itemName}"]`).forEach(input => {
                input.value = this.value;
            });
            const item = itemsManager.getItem(itemName);
            if (item) {
                item.updateMarketValue(parseFloat(this.value));
            }
        });

        itemDiv.appendChild(priceInput);
        container.appendChild(itemDiv);

        const subRecipe = recipesManager.getRecipe(itemName);
        if (subRecipe) {
            renderRecipeDetails(itemName, depth + 1, container);
        }
    });
}

function filterRecipesByName() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const recipesMenu = document.getElementById('recipesMenu');
    recipesMenu.innerHTML = '';

    let filteredRecipes = Array.from(recipesManager.recipes.values()).filter(recipe =>
        recipe.name.toLowerCase().includes(searchText) ||
        recipe.group.toLowerCase().includes(searchText) ||
        Object.keys(recipe.requirements).some(itemName =>
            itemName.toLowerCase().includes(searchText)
        )
    );

    if (filteredRecipes.length === 0) {
        recipesMenu.innerHTML = '<div class="list-group-item text-muted">Nenhuma receita encontrada.</div>';
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.className = 'list-group-item list-group-item-action text-muted-custom';
            recipeItem.textContent = recipe.name;
            recipeItem.addEventListener('click', () => renderRecipeDetails(recipe.name));
            recipesMenu.appendChild(recipeItem);
        });
    }
}

function calculateRecipeCost(selectedRecipeName, ignoreMaterials, ignoreItems, quantity) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    let costDetailsMap = new Map();
    let totalCost = 0;

    const addItemCost = (itemName, quantity, unitCost) => {
        let totalCost = unitCost * quantity;
        if (costDetailsMap.has(itemName)) {
            let existing = costDetailsMap.get(itemName);
            existing.quantity += quantity;
            existing.totalCost += totalCost;
        } else {
            costDetailsMap.set(itemName, { itemName, quantity, unitCost, totalCost });
        }
    };

    const calculateItemCost = (itemName, quantity, ignoreMaterials, ignoreItems, isRootCall = true) => {
        let item = itemsManager.getItem(itemName);
        if (!item) {
            item = new Item(itemName, 0, []);
        }

        const recipe = recipesManager.getRecipe(itemName);
        const shouldIgnore = !isRootCall && ((ignoreMaterials && item.filters && item.filters.includes("Material")) || (ignoreItems && item.filters && item.filters.includes("Item")));

        if (!recipe || shouldIgnore) {
            addItemCost(itemName, quantity, item.marketValue);
        } else {
            Object.entries(recipe.requirements).forEach(([reqItemName, reqQuantity]) => {
                calculateItemCost(reqItemName, reqQuantity * quantity, ignoreMaterials, ignoreItems, false);
            });
        }
    };

    calculateItemCost(selectedRecipeName, quantity, ignoreMaterials, ignoreItems);

    costDetailsMap.forEach((detail) => {
        totalCost += detail.totalCost;
    });

    const textSpan = document.createElement('span');
    
    let htmlContent = "Relatório:<br>";
    costDetailsMap.forEach((value, key) => {
        htmlContent += `- ${value.quantity} x ${value.itemName} (Preço: ${Formatter.formatCurrency(value.unitCost)}, Custo total: ${Formatter.formatCurrency(value.totalCost)})<br>`;
    });
    htmlContent += `<br><strong>Custo Total: ${Formatter.formatCurrency(totalCost)}</strong><br>`;
    textSpan.innerHTML = htmlContent;
    
    resultsDiv.appendChild(textSpan);
}
