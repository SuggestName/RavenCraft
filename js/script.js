
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
        reportHtml += `- <input type="number" value="${detail.quantity}" onchange="updateQuantity(this, ${detail.totalCost}, '${detail.itemName}')"> x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})<br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> ${Formatter.formatNumber(totalCost)}<br/><br/>`;
    document.getElementById('resultado').innerHTML += reportHtml;
}

function updateQuantity(input, totalCost, itemName) {
    const newQuantity = parseInt(input.value);
    const originalQuantity = parseInt(input.getAttribute('data-original-value'));
    const quantityDifference = newQuantity - originalQuantity;
    const newTotalCost = totalCost + (quantityDifference * totalCost);
    
    // Atualize a exibição do custo total do item
    input.parentNode.innerHTML = `- <input type="number" value="${newQuantity}" data-original-value="${newQuantity}" onchange="updateQuantity(this, ${totalCost}, '${itemName}')"> x ${itemName} (Preço: ${Formatter.formatNumber(totalCost)}, Custo total: ${Formatter.formatNumber(newTotalCost)})<br/>`;
    
    // Atualize o custo total geral
    const totalElement = document.getElementById('totalCost');
    const currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = currentTotal + (quantityDifference * totalCost);
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
