document.addEventListener('DOMContentLoaded', function () {
    buildProfessionsMenu();

    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');

    // Adicionar evento de clique ao botão de filtrar
    filterButton.addEventListener('click', filterRecipesByName);

    // Opcional: adicionar evento de "enter" no campo de pesquisa para ativar a filtragem
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            filterRecipesByName();
        }
    });
});

document.getElementById('calculateButton').addEventListener('click', function () {
    const recipeDetailsContainer = document.getElementById('recipeDetails');
    const selectedRecipeName = recipeDetailsContainer.getAttribute('data-recipe-name');
    const ignoreMaterials = document.getElementById('ignoreMaterials').checked;
    const ignoreItems = document.getElementById('ignoreItems').checked;
    const quantity = parseInt(document.getElementById('quantidade').value) || 1;

    if (selectedRecipeName) {
        calculateRecipeCost(selectedRecipeName, ignoreMaterials, ignoreItems, quantity);
    } else {
        document.getElementById('results').textContent = "Por favor, selecione uma receita primeiro.";
    }
});
