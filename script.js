const reportTypeNames = {
    1: "Comprando: Matérias-Primas",
    2: "Comprando: Materiais e Itens",
    3: "Comprando: Matérias-Primas e Itens"
};

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
    DOMUtils.clearElement('receitaSelect'); // Limpa as opções existentes

    recipes.forEach(recipe => {
        let option = DOMUtils.createElement('option', { value: recipe.output }, recipe.output);

        if (!recipe.hasRequirements()) {
            option.disabled = true;
        }

        recipeSelect.appendChild(option);
    });

    // Atualiza a lista de itens baseada na primeira receita, se disponível
    recipeSelect = document.getElementById('receitaSelect').value;
    populateItemsList(recipeSelect);
}

function populateItemsList(recipeName) {
    const itemsDiv = document.getElementById('itensReceita');
    itemsDiv.innerHTML = ''; // Limpa a lista existente
    const itemsSet = getItemsForRecipe(recipeName);

    itemsSet.forEach(itemName => {
        const item = craftsManager.getItem(itemName);
        if (item) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';

            const labelColDiv = document.createElement('div');
            labelColDiv.className = 'col-6';
            const label = document.createElement('label');
            label.textContent = itemName;
            labelColDiv.appendChild(label);

            const inputColDiv = document.createElement('div');
            inputColDiv.className = 'col-6';
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'form-control';
            input.value = item.marketValue;
            // Adicionando um atributo de dados para identificar o item
            input.setAttribute('data-itemname', itemName);

            inputColDiv.appendChild(input);
            rowDiv.appendChild(labelColDiv);
            rowDiv.appendChild(inputColDiv);
            itemsDiv.appendChild(rowDiv);
        }
    });
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
    // Usa o reportType para obter a string correspondente
    let reportTypeName = reportTypeNames[reportType] || "Relatório Desconhecido";

    let reportHtml = `<div><strong>${reportTypeName}:</strong></div>`;
    let totalCost = 0;

    costDetails.forEach(detail => {
        reportHtml += `- ${detail.itemName} x${detail.quantity} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})<br/>`;
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
    generateCostReportFromUI(itemName, quantity);
}

// Initialization
window.onload = () => {
    populateRecipeTypeMenu();
    populateRecipeSelect();

    const itemName = document.getElementById('receitaSelect').value;
    populateItemsList(itemName);
};