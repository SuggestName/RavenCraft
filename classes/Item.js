class Item {
    constructor(name, marketValue, recipe = {}) {
        this.name = name;
        this.marketValue = marketValue;
        this.recipe = recipe;
    }

    calculateMaterialCost(catalog) {
        let cost = 0;
        for (let itemName in this.recipe) {
            const quantity = this.recipe[itemName];
            const item = catalog.findItem(itemName);
            if (item) {
                cost += item.marketValue * quantity;
            }
        }
        return cost;
    }
}
