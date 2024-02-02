document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.className = currentTheme;
        updateToggleButton(currentTheme);
    }

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
        updateToggleButton(theme);
    });

    function updateToggleButton(theme) {
        if (theme === 'dark-mode') {
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        }
    }
});

function populateRecipeTypeMenu() {
    const recipeTypes = craftsManager.getRecipeTypes();
    recipeTypes.forEach(type => {
        let li = DOMUtils.createElement('li', { 'class': 'nav-item' });
        let a = DOMUtils.createElement('a', { 'class': 'nav-link', 'href': '#' }, type);
        a.onclick = () => filterRecipesByType(type);
        li.appendChild(a);
        DOMUtils.appendChild('tipoReceitaMenu', li);
    });
}

function filterRecipesByType(type) {
    const recipes = craftsManager.getRecipesByType(type);
    let recipeSelect = document.getElementById('receitaSelect');
    DOMUtils.clearElement('receitaSelect');

    recipes.forEach(recipe => {
        let option = DOMUtils.createElement('option', { value: recipe.output }, recipe.output);

        if (!recipe.hasRequirements()) {
            option.disabled = true;
        }

        recipeSelect.appendChild(option);
    });

    recipeSelect = document.getElementById('receitaSelect').value;
    populateItemsList(recipeSelect);
}

function populateItemsList(recipeName) {
    const itemsDiv = document.getElementById('itensReceita');
    itemsDiv.innerHTML = '';

    // Adiciona rótulos para as colunas
    const headerRowDiv = document.createElement('div');
    headerRowDiv.className = 'row font-weight-bold';
    const headerLabelColDiv = document.createElement('div');
    headerLabelColDiv.className = 'col-6';
    headerLabelColDiv.textContent = 'Itens';
    const headerValueColDiv = document.createElement('div');
    headerValueColDiv.className = 'col-6';
    headerValueColDiv.textContent = 'Valores Do Market';
    headerRowDiv.appendChild(headerLabelColDiv);
    headerRowDiv.appendChild(headerValueColDiv);
    itemsDiv.appendChild(headerRowDiv);

    function addItemsRecursively(recipeName, level = 0, parentRecipe = null) {
        const recipe = craftsManager.recipes.get(recipeName);
        if (!recipe && !parentRecipe) return;

        const requirements = parentRecipe ? parentRecipe.requirements : recipe.requirements;

        Object.keys(requirements).forEach(itemName => {
            const item = craftsManager.getItem(itemName);
            if (item) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'row';

                const labelColDiv = document.createElement('div');
                labelColDiv.className = 'col-6';
                const label = document.createElement('label');

                // Criar indentação visual
                const indentSpan = document.createElement('span');
                indentSpan.innerHTML = '&nbsp;'.repeat(level * 4); // Usar entidades HTML para espaços
                label.appendChild(indentSpan);

                const textContent = `${requirements[itemName]} x ${itemName}`; // Inclui a quantidade
                const textNode = document.createTextNode(textContent);
                label.appendChild(textNode);

                labelColDiv.appendChild(label);
                rowDiv.appendChild(labelColDiv);

                const inputColDiv = document.createElement('div');
                inputColDiv.className = 'col-6';
                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'form-control item-input';
                input.value = item.marketValue;
                input.setAttribute('data-itemname', itemName);
                input.addEventListener('change', (event) => {
                    const itemNameToUpdate = event.target.getAttribute('data-itemname');
                    const newValue = event.target.value;
                    document.querySelectorAll(`input[data-itemname="${itemNameToUpdate}"]`).forEach(input => {
                        input.value = newValue;
                    });
                });

                inputColDiv.appendChild(input);
                rowDiv.appendChild(inputColDiv);
                itemsDiv.appendChild(rowDiv);
            }

            // Chamada recursiva para itens de sub-receitas com um nível de indentação maior
            const childRecipe = craftsManager.recipes.get(itemName);
            if (childRecipe) {
                addItemsRecursively(itemName, level + 1, childRecipe);
            }
        });
    }

    addItemsRecursively(recipeName);
}

function populateRecipeSelect() {
    const recipeSelect = document.getElementById('receitaSelect');
    craftsManager.recipes.forEach((recipe, recipeName) => {
        let option = document.createElement('option');
        option.value = recipeName;
        option.textContent = recipeName;

        if (!recipe.hasRequirements()) {
            option.disabled = true;
        }

        recipeSelect.appendChild(option);
    });

    recipeSelect.onchange = () => {
        const selectedRecipe = recipeSelect.value;
        populateItemsList(selectedRecipe);
    };
}

function getItemsForRecipe(recipeName, itemsSet = new Set()) {
    const recipe = craftsManager.recipes.get(recipeName);
    if (recipe) {
        Object.keys(recipe.requirements).forEach(itemName => {
            if (!itemsSet.has(itemName)) {
                itemsSet.add(itemName);
                getItemsForRecipe(itemName, itemsSet); // Chamada recursiva para itens que são resultados de outras receitas
            }
        });
    }
    return itemsSet;
}

function displayCostReport(costDetails, reportType) {
    let reportHtml = `<div><strong>Relatório:</strong></div>`;
    let totalCost = 0;

    costDetails.forEach(detail => {
        reportHtml += `- ${detail.quantity} x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})<br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> ${Formatter.formatNumber(totalCost)}<br/><br/>`;
    document.getElementById('resultado').innerHTML += reportHtml;
}

function generateCostReportFromUI() {
    const itemName = document.getElementById('receitaSelect').value;
    const quantity = parseInt(document.getElementById('quantidade').value, 10);
    document.getElementById('resultado').innerHTML = ''; // Limpar relatórios anteriores

    // Coletando valores atualizados dos inputs
    const inputs = document.querySelectorAll('[data-itemname]');
    const updatedValues = {};
    inputs.forEach(input => {
        const itemName = input.getAttribute('data-itemname');
        updatedValues[itemName] = parseFloat(input.value);
    });

    // Atualizar os valores de mercado dos itens no craftsManager com os valores coletados
    Object.keys(updatedValues).forEach(itemName => {
        const item = craftsManager.getItem(itemName);
        if (item) {
            item.marketValue = updatedValues[itemName];
        }
    });

    [1, 2, 3].forEach(reportType => {
        let costDetails = craftsManager.calculateCraftingCost(itemName, quantity, reportType);
        displayCostReport(costDetails, reportType);
    });
}

function showTotalPrice() {
    const itemName = document.getElementById('receitaSelect').value;
    const quantity = parseInt(document.getElementById('quantidade').value, 10);
    document.getElementById('resultado').innerHTML = ''; // Limpar relatórios anteriores

    // Coletando valores atualizados dos inputs e atualizando no craftsManager
    document.querySelectorAll('.item-input').forEach(input => {
        const itemName = input.getAttribute('data-itemname');
        const newValue = parseFloat(input.value);
        const item = craftsManager.getItem(itemName);
        if (item) {
            item.marketValue = newValue; // Atualiza o valor de mercado do item
        }
    });

    // Executa o cálculo depois de atualizar os valores
    const options = {
        ignorarMateriais: document.getElementById('ignorarMateriais').checked,
        ignorarItens: document.getElementById('ignorarItens').checked
    };

    let costDetails = craftsManager.calculateCraftingCost(itemName, quantity, options);
    displayCostReport(costDetails, 1); // Supondo que a função de exibição do relatório foi adaptada conforme necessário
}

// Initialization
window.onload = () => {
    populateRecipeTypeMenu();
    populateRecipeSelect();

    const itemName = document.getElementById('receitaSelect').value;
    populateItemsList(itemName);
};