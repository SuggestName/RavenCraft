class CraftsManager {
    constructor() {
        this.recipes = new Map();
        this.items = new Map();
    }

    addItem(item) {
        this.items.set(item.name, item);
    }

    addRecipe(recipe) {
        this.recipes.set(recipe.output, recipe);
    }

    getItem(name) {
        return this.items.get(name);
    }

    getRecipesByType(type) {
        return Array.from(this.recipes.values()).filter(recipe => recipe.type === type);
    }

    getRecipeTypes() {
        const types = new Set();
        this.recipes.forEach(recipe => types.add(recipe.type));
        return Array.from(types);
    }

    calculateCraftingCost(itemName, quantity, reportType) {
        let costDetails = {
            totalCost: 0,
            details: new Map()
        };

        const addItemCost = (itemName, quantity, unitCost) => {
            let totalCost = unitCost * quantity;
            if (costDetails.details.has(itemName)) {
                let existing = costDetails.details.get(itemName);
                existing.quantity += quantity;
                existing.totalCost += totalCost;
            } else {
                costDetails.details.set(itemName, { itemName, quantity, unitCost, totalCost });
            }
            costDetails.totalCost += totalCost;
        };

        const recursiveCalculation = (itemName, quantity, reportType) => {
            const item = this.items.get(itemName);
            const recipe = this.recipes.get(itemName);

            if (!item) return;

            if (item.type === "MateriaPrima") {
                addItemCost(itemName, quantity, item.marketValue);
            } else if (reportType === 3 && item.type === "Item") {
                addItemCost(itemName, quantity, item.marketValue);
                return;
            } else if (reportType === 2 && (item.type === "Material" || item.type === "Item")) {
                addItemCost(itemName, quantity, item.marketValue);
                return; // Não processa mais a receita para o reportType 2
            }

            if (recipe && (item.type === "Material" || item.type === "Item")) {
                Object.entries(recipe.requirements).forEach(([reqItemName, reqQuantity]) => {
                    recursiveCalculation(reqItemName, reqQuantity * quantity, reportType);
                });
            }
        };

        const recipe = this.recipes.get(itemName);
        Object.entries(recipe.requirements).forEach(([reqItemName, reqQuantity]) => {
            recursiveCalculation(reqItemName, reqQuantity * quantity, reportType);
        });

        return Array.from(costDetails.details.values());
    }
}

const craftsManager = new CraftsManager();