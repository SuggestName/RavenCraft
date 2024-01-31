class Catalog {
    constructor() {
        this.items = {};
    }

    add(type, name, marketValue, recipe = {}) {
        if (!this.items[type]) {
            this.items[type] = {};
        }
        this.items[type][name] = new Item(name, marketValue, recipe);
    }

    findItem(name) {
        for (let type in this.items) {
            if (this.items[type][name]) {
                return this.items[type][name];
            }
        }
        return null;
    }
}
