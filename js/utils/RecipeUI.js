
function initializeRecipeUI() {
    populateRecipeGroupMenu();
    populateRecipeSelect();
    attachRecipeEventListeners();
}

function attachRecipeEventListeners() {
    document.getElementById('receitaSelect').addEventListener('change', handleRecipeSelectChange);
}

function handleRecipeSelectChange() {
    const selectedRecipeName = document.getElementById('receitaSelect').value;

    DOMUtils.clearElement('itensReceita');
    populateItemsList(selectedRecipeName);
}

function populateRecipeGroupMenu() {
    const recipeGroups = craftsManager.getRecipeGroups();

    let liAll = DOMUtils.createElement('li', { 'class': 'nav-item' });
    let aAll = DOMUtils.createElement('a', { 'class': 'nav-link', 'href': '#' }, 'Todos');
    aAll.onclick = () => filterRecipesByGroup('Todos');
    liAll.appendChild(aAll);
    DOMUtils.appendChild('tipoReceitaMenu', liAll);

    recipeGroups.forEach(group => {
        let li = DOMUtils.createElement('li', { 'class': 'nav-item' });
        let a = DOMUtils.createElement('a', { 'class': 'nav-link', 'href': '#' }, group);
        a.onclick = () => filterRecipesByGroup(group);
        li.appendChild(a);
        DOMUtils.appendChild('tipoReceitaMenu', li);
    });
}

function filterRecipesByGroup(group) {
    let recipes;
    if (group === 'Todos') {
        recipes = Array.from(craftsManager.recipes.values());
    } else {
        recipes = craftsManager.getRecipesByGroup(group);
    }

    let recipeSelect = document.getElementById('receitaSelect');
    DOMUtils.clearElement('receitaSelect');

    recipes.forEach(recipe => {
        let option = DOMUtils.createElement('option', { value: recipe.name }, recipe.name);

        if (!recipe.hasRequirements()) {
            option.disabled = true;
        }

        recipeSelect.appendChild(option);
    });

    populateItemsList(recipeSelect.value);
}


function populateItemsList(recipeName) {
    const itemsDiv = document.getElementById('itensReceita');
    itemsDiv.innerHTML = '';

    const headerRowDiv = document.createElement('div');
    headerRowDiv.className = 'row font-weight-bold';
    const headerLabelColDiv = document.createElement('div');
    headerLabelColDiv.className = 'col-6';
    headerLabelColDiv.textContent = 'Items';
    
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
                rowDiv.className = 'row mt-2';

                const labelColDiv = document.createElement('div');
                labelColDiv.className = 'col-6';
                const label = document.createElement('label');

                const indentSpan = document.createElement('span');
                indentSpan.innerHTML = '&nbsp;'.repeat(level * 4);
                label.appendChild(indentSpan);

                const textContent = `${requirements[itemName]} x ${itemName}`;
                const textNode = document.createTextNode(textContent);
                label.appendChild(textNode);

                labelColDiv.appendChild(label);
                rowDiv.appendChild(labelColDiv);

                const inputColDiv = document.createElement('div');
                inputColDiv.className = 'col-6';
                const input = document.createElement('input');
                input.group = 'number';
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

    const itemName = recipeSelect.value;
    populateItemsList(itemName);
}

function getItemsForRecipe(recipeName, itemsSet = new Set()) {
    const recipe = craftsManager.recipes.get(recipeName);
    if (recipe) {
        Object.keys(recipe.requirements).forEach(itemName => {
            if (!itemsSet.has(itemName)) {
                itemsSet.add(itemName);
                getItemsForRecipe(itemName, itemsSet);
            }
        });
    }
    return itemsSet;
}