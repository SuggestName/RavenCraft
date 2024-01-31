// Inicialização das classes principais
const catalog = new Catalog();
const costCalculator = new CostCalculator(catalog);

const receitasScripts = [
    "receitas-materiais.js",
    "receitas-materiasloots.js",
    "receitas-blacksmithing.js",
    "receitas-weaving.js",
    "receitas-carpentry.js",
    "receitas-cooking.js"
];

receitasScripts.forEach(script => {
    const scriptTag = document.createElement('script');
    scriptTag.src = `receitas/${script}`;
    document.head.appendChild(scriptTag);
});

// Quando a janela carregar, executa a função para filtrar por tipo
window.onload = function() {
    initializeTypeSelect();
    filterByType();
};

function initializeTypeSelect() {
    let optionsHTML = '<option value="Todos">Todos</option>';
    for (let type in catalog.items) {
        optionsHTML += `<option value="${type}">${type}</option>`;
    }
    DOMUtils.setInnerHTML("tipoSelect", optionsHTML);
}

// Função para filtrar os itens por tipo e atualizar o select de receitas
function filterByType() {
    const selectedType = DOMUtils.getValue("tipoSelect");
    let optionsHTML = '';

    const addItemOptions = (items) => {
        for (let itemName in items) {
            const item = items[itemName];
            // Verifica se o item tem preço 0 e receita vazia
            if (!item.marketValue && Object.keys(item.recipe).length === 0) {
                optionsHTML += `<option class="dropdown-divider" disabled>${itemName}</option>`;
            } else {
                optionsHTML += `<option value="${itemName}">${itemName}</option>`;
            }
        }
    };

    if (selectedType === 'Todos') {
        for (let type in catalog.items) {
            addItemOptions(catalog.items[type]);
        }
    } else {
        addItemOptions(catalog.items[selectedType]);
    }

    DOMUtils.setInnerHTML("receitaSelect", optionsHTML);
    listRecipeItems(DOMUtils.getValue("receitaSelect"));
}

// Função para listar os itens da receita selecionada
function listRecipeItems(itemName) {
    const selectedItem = catalog.findItem(itemName);
    if (selectedItem) {
        let listedItems = new Set();
        let htmlContent = createItemListingHTML(selectedItem, itemName, 0, listedItems);
        DOMUtils.setInnerHTML("itensReceita", htmlContent);
    } else {
        DOMUtils.setInnerHTML("itensReceita", '<p>Nenhum item na receita.</p>');
    }

    DOMUtils.showElement("itensReceitaSection");
}

// Função auxiliar recursiva para criar a listagem HTML de itens
function createItemListingHTML(item, itemName, level, listedItems) {
    if (listedItems.has(itemName)) {
        return ''; // Se o item já foi listado, não adiciona novamente
    }
    listedItems.add(itemName);

    let htmlContent = `<div style="margin-left: ${level * 20}px;">
                           <label>${itemName}:</label>
                           <input type="number" id="valor-${itemName}" value="${item.marketValue}" class="form-control" style="width: 100px; display: inline-block;">
                       </div>`;

    for (let subItemName in item.recipe) {
        const subItem = catalog.findItem(subItemName);
        htmlContent += createItemListingHTML(subItem, subItemName, level + 1, listedItems);
    }

    return htmlContent;
}

// Função para mostrar o preço total com base no item e quantidade selecionados
function showTotalPrice() {
    const itemName = DOMUtils.getValue("receitaSelect");
    const quantity = parseInt(DOMUtils.getValue("quantidade")) || 1;

    if (itemName) {
        updateCatalogValuesFromInputs();
        DOMUtils.setInnerHTML("resultado", printTotalPrice(itemName, quantity));
    } else {
        DOMUtils.setInnerHTML("resultado", '');
    }
}

// Atualiza os valores do catálogo com base nos inputs da interface do usuário
function updateCatalogValuesFromInputs() {
    const inputs = document.querySelectorAll("#itensReceita input[type='number']");
    inputs.forEach(input => {
        const itemName = input.id.replace("valor-", "");
        const value = parseFloat(input.value);
        const item = catalog.findItem(itemName);
        if (item) {
            item.marketValue = value;
        }
    });
}

// Função para imprimir o preço total
function printTotalPrice(itemName, quantity) {
    let rawMaterialsCost = costCalculator.calculateRawMaterialsCost(itemName, quantity);
    let manufacturingCost = costCalculator.calculateManufacturingCost(itemName, quantity);

    let totalRawMaterialsCost = 0;
    let output = `${itemName} x${quantity} - Resumo de Custos:\n\n`;
    output += "Custo das Matérias-Primas (Itens sem receita):\n";

    for (let material in rawMaterialsCost) {
        let quantity = rawMaterialsCost[material];
        let itemMaterial = catalog.findItem(material);
        if (Object.keys(itemMaterial.recipe).length === 0) { 
            let totalMaterialCost = itemMaterial.marketValue * quantity;
            totalRawMaterialsCost += totalMaterialCost;
            output += `- ${quantity} ${material} (Preço: ${Formatter.formatCurrency(itemMaterial.marketValue)}, Custo total: ${Formatter.formatCurrency(totalMaterialCost)})\n`;
        }
    }

    output += `Custo Total de Matérias-Primas: ${Formatter.formatCurrency(totalRawMaterialsCost)}\n\n`;
    output += "Custo de Fabricação (comprando os itens da receita):\n";

    let itemFinal = catalog.findItem(itemName);
    if (Object.keys(itemFinal.recipe).length > 0) {
        for (let subItemName in itemFinal.recipe) {
            let subItem = catalog.findItem(subItemName);
            let subItemQuantity = itemFinal.recipe[subItemName] * quantity;
            let subItemCost = subItem.marketValue * subItemQuantity;
            output += `- ${subItemQuantity} ${subItemName} (Preço: ${Formatter.formatCurrency(subItem.marketValue)}, Custo total: ${Formatter.formatCurrency(subItemCost)})\n`;
        }
    }

    output += `Custo Total de Fabricação: ${Formatter.formatCurrency(manufacturingCost)}\n\n`;

    output += `Preço de revenda do Item: ${Formatter.formatCurrency(itemFinal.marketValue * quantity)}\n`;
    output += `Preço comprando os materiais: ${Formatter.formatCurrency(totalRawMaterialsCost)}\n`;
    output += `Preço comprando os Items já prontos: ${Formatter.formatCurrency(manufacturingCost)}\n`;

    return output;
}
