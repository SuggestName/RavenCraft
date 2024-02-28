class ItemsManager {
	constructor() {
		this.items = new Map();
	}

	addItem(item) {
		this.items.set(item.name, item);
	}

    getItem(name) {
		return this.items.get(name);
	}

	getItemsByFilter(filters) {
		let itemsInFilters = [];
		for (let item of this.items.values()) {
			if (item.filters.includes(filters)) {
				itemsInFilters.push(item);
			}
		}
		return itemsInFilters;
	}
}

const itemsManager = new ItemsManager();
