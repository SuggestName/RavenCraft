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

    calculateCraftingCost(itemName, quantity, options = { ignorarMateriais: false, ignorarItens: false }, isRootCall = true) {
        let costDetailsMap = new Map();

        const addItemCost = (itemName, quantity, unitCost) => {
            let totalCost = unitCost * quantity;
            if (costDetailsMap.has(itemName)) {
                let existing = costDetailsMap.get(itemName);
                existing.quantity += quantity;
                existing.totalCost += totalCost;
            } else {
                costDetailsMap.set(itemName, { itemName, quantity, unitCost, totalCost });
            }
        };

        const calculateItemCost = (itemName, quantity, options, isRootCall) => {
            const item = this.getItem(itemName);
            const recipe = this.recipes.get(itemName);

            // Se for a chamada raiz ou as opções permitirem o cálculo do item
            if (!recipe || (!isRootCall && ((options.ignorarMateriais && item.type === 'Material') || (options.ignorarItens && item.type === 'Item')))) {
                addItemCost(itemName, quantity, item.marketValue);
                return;
            }

            // Para receitas não ignoradas ou na chamada raiz
            Object.entries(recipe.requirements).forEach(([reqItemName, reqQuantity]) => {
                calculateItemCost(reqItemName, reqQuantity * quantity, options, false);
            });
        };

        calculateItemCost(itemName, quantity, options, isRootCall);

        // Converter o Map para um array de objetos para a saída
        return Array.from(costDetailsMap.values());
    }
}

const craftsManager = new CraftsManager();