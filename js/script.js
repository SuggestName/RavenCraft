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
        reportHtml += `- <input id="input_${index}" type="number" value="${detail.quantity}" data-original-value="${detail.quantity}" class="item-input" data-cost-details='${JSON.stringify(detail)}' onchange="updateQuantity(this)">`;
        reportHtml += `<span class="cost-details"> x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})</span><br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> ${Formatter.formatNumber(totalCost)}<br/><br/>`;
    $('#resultado').html(reportHtml);
}

function updateQuantity(input) {
    const newQuantity = parseInt(input.value);
    const originalQuantity = parseInt(input.getAttribute('data-original-value'));
    const quantityDifference = newQuantity - originalQuantity;

    // Recupere os detalhes de custo do atributo de dados HTML
    const detail = JSON.parse(input.getAttribute('data-cost-details'));
    const newTotalCost = detail.totalCost * newQuantity;

    // Atualize a exibição do custo total do item
    $(input).siblings('.cost-details').html(` x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(newTotalCost)})`);

    // Atualize o custo total geral
    const totalElement = $('#totalCost');
    let currentTotal = parseFloat(totalElement.text());
    currentTotal += quantityDifference * detail.totalCost;
    totalElement.text(currentTotal);
}


function showTotalPrice() {
    const itemName = document.getElementById('receitaSelect').value;
    const quantity = parseInt(document.getElementById('quantidade').value, 10);
    document.getElementById('resultado').innerHTML = '';

    const options = {
        ignorarMateriais: document.getElementById('ignorarMateriais').checked,
        ignorarItens: document.getElementById('ignorarItens').checked
    };

    // Calcula o custo total
    let costDetails = craftsManager.calculateCraftingCost(itemName, quantity, options);
    let totalCost = 0;
    costDetails.forEach((detail) => {
        totalCost += detail.totalCost;
    });

    // Exibe o relatório de custos
    displayCostReport(costDetails, 1);

    // Atualiza o custo total geral
    const totalElement = $('#totalCost');
    totalElement.text(Formatter.formatNumber(totalCost));    
}
