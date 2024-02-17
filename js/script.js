function formatNumber(number) {
    // Use o método toLocaleString para garantir que o ponto seja usado como separador decimal
    return number.toLocaleString('en-US');
}

$(document).ready(function () {
    $("#receitaSelect").select2({});
    initializeApp();
});

function initializeApp() {
    initializeRecipeUI();
    initializeThemeToggle();
}

function displayCostReport(costDetails, reportGroup) {
    let reportHtml = `<div><strong>Relatório:</strong></div>`;
    let totalCost = 0;

    costDetails.forEach((detail, index) => {
        reportHtml += `- <input id="input_${index}" type="number" value="${detail.quantity}" data-original-value="${detail.quantity}" data-cost-details='${JSON.stringify(detail)}' class="item-input" onchange="updateQuantity(this)">`;
        reportHtml += `<span class="cost-details"> x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})</span><br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> <span id="totalCost">${Formatter.formatNumber(totalCost)}</span><br/><br/>`;
    $('#resultado').html(reportHtml);
}

function updateQuantity(input) {
    const newQuantity = parseInt(input.value);
    const originalQuantity = parseInt(input.getAttribute('data-original-value'));
    const quantityDifference = newQuantity - originalQuantity;

    // Recupere os detalhes de custo do atributo de dados HTML
    const detail = JSON.parse(input.getAttribute('data-cost-details'));
    const newTotalCost = detail.unitCost * newQuantity;

    // Atualize a exibição do custo total do item
    $(input).next('.cost-details').html(` x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(newTotalCost)})`);

    // Atualize o custo total geral
    const totalElement = $('#totalCost');
    totalElement.text(currentTotal.toFixed(2).replace('.', ','));
    let currentTotal = parseFloat(totalElement.text());
    currentTotal += (newTotalCost - detail.totalCost); // Ajuste para atualizar o custo total geral
    totalElement.text(Formatter.formatNumber(currentTotal));
}

function showTotalPrice() {
    const itemName = document.getElementById('receitaSelect').value;
    const quantity = parseInt(document.getElementById('quantidade').value, 10);
    document.getElementById('resultado').innerHTML = '';

    document.querySelectorAll('.item-input').forEach(input => {
        const itemName = input.getAttribute('data-itemname');
        const newValue = parseFloat(input.value);
        const item = craftsManager.getItem(itemName);
        if (item) {
            item.marketValue = newValue;
        }
    });

    const options = {
        ignorarMateriais: document.getElementById('ignorarMateriais').checked,
        ignorarItens: document.getElementById('ignorarItens').checked
    };

    let costDetails = craftsManager.calculateCraftingCost(itemName, quantity, options);
    displayCostReport(costDetails, 1);
}
