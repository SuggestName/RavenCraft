class CostCalculator {
    constructor(catalog) {
        this.catalog = catalog;
    }

    calculateRawMaterialsCost(itemName, quantity) {
        let result = {};

        const addItemQuantity = (material, qty) => {
            result[material] = (result[material] || 0) + qty;
        };

        const processItem = (itemName, qty) => {
            const item = this.catalog.findItem(itemName);
            if (item && Object.keys(item.recipe).length > 0) {
                for (let subItem in item.recipe) {
                    processItem(subItem, item.recipe[subItem] * qty);
                }
            } else {
                addItemQuantity(itemName, qty);
            }
        };

        processItem(itemName, quantity);
        return result;
    }

    calculateManufacturingCost(itemName, quantity) {
        let cost = 0;
        const calculateCostForRecipeItems = (item, qty) => {
            if (Object.keys(item.recipe).length > 0) {
                for (let subItemName in item.recipe) {
                    const subItem = this.catalog.findItem(subItemName);
                    const subItemQty = item.recipe[subItemName] * qty;
                    cost += subItem.marketValue * subItemQty;
                }
            }
        };

        const finalItem = this.catalog.findItem(itemName);
        calculateCostForRecipeItems(finalItem, quantity);
        return cost;
    }
}
