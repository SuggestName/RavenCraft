
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
        reportHtml += `- <input type="number" value="${detail.quantity}" onchange="updateQuantity(this, ${detail.totalCost})"> x ${detail.itemName} (Preço: ${Formatter.formatNumber(detail.unitCost)}, Custo total: ${Formatter.formatNumber(detail.totalCost)})<br/>`;
        totalCost += detail.totalCost;
    });

    reportHtml += `<strong>Custo Total:</strong> ${Formatter.formatNumber(totalCost)}<br/><br/>`;
    document.getElementById('resultado').innerHTML += reportHtml;
}

function updateQuantity(input, totalCost) {
    const newQuantity = parseInt(input.value);
    const newTotalCost = newQuantity * totalCost;
    // Atualize a exibição do custo total do item
    input.parentNode.innerHTML = `- <input type="number" value="${newQuantity}" onchange="updateQuantity(this, ${totalCost})"> x ${input.parentNode.getAttribute('data-item')} (Preço: ${Formatter.formatNumber(totalCost)}, Custo total: ${Formatter.formatNumber(newTotalCost)})<br/>`;
    // Atualize o custo total geral
    totalCost += newTotalCost;
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
