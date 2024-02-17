
$(document).ready(function () {
    $("#receitaSelect").select2({
    });
    initializeApp();
});

function initializeApp() {
   
    initializeRecipeUI()
    initializeThemeToggle()
}

function displayCostReport(costDetails, reportGroup) {
    let reportHtml = `<div><strong>Relatório:</strong></div>`;
    let totalCost = 0;

    costDetails.forEach(detail => {
        reportHtml += `- <input type="number" value="${detail.quantity}" data-original-value="${detail.quantity}" class="item-input">`;
        reportHtml += `<span class="cost-details"> x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})</span><br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> ${Formatter.formatNumber(totalCost)}<br/><br/>`;
    $('#resultado').append(reportHtml);
}

function updateQuantity(input, totalCost, itemName) {
    const newQuantity = parseInt(input.value);
    const originalQuantity = parseInt($(input).attr('data-original-value'));
    const quantityDifference = newQuantity - originalQuantity;
    const newTotalCost = totalCost * newQuantity;

    // Atualize a exibição do custo total do item
    $(input).siblings('.cost-details').html(` x ${itemName} (Preço: ${Formatter.formatNumber(totalCost)}, Custo total: ${Formatter.formatNumber(newTotalCost)})`);

    // Atualize o custo total geral
    const totalElement = $('#totalCost');
    let currentTotal = parseFloat(totalElement.text());
    currentTotal += quantityDifference * totalCost;
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

    let costDetails = craftsManager.calculateCraftingCost(itemName, quantity, options);
    displayCostReport(costDetails, 1);
}
