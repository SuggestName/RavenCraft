$(document).ready(function () {
    $("#receitaSelect").select2({
    });
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
        reportHtml += `- <input id="input_${index}" type="number" value="${detail.quantity}" data-original-value="${detail.quantity}" class="item-input" onchange="updateQuantity(this, ${index})">`;
        reportHtml += `<span class="cost-details"> x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})</span><br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> ${Formatter.formatNumber(totalCost)}<br/><br/>`;
    $('#resultado').html(reportHtml);
}

function updateQuantity(input, index) {
    const newQuantity = parseInt(input.value);
    const originalQuantity = parseInt($(input).attr('data-original-value'));
    const quantityDifference = newQuantity - originalQuantity;

    // Atualize a exibição do custo total do item
    const detail = costDetails[index];
    const newTotalCost = detail.totalCost * newQuantity;
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

    // Defina costDetails aqui
    let costDetails = craftsManager.calculateCraftingCost(itemName, quantity, options);

    // Exiba o relatório de custos
    displayCostReport(costDetails, 1);
    
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
