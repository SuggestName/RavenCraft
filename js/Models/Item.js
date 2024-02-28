class Item {
	constructor(name, marketValue, filters) {
		this.name = name;
		this.marketValue = marketValue;
		this.filters = filters;
	}

	updateMarketValue(newMarketValue) {
		this.marketValue = newMarketValue;
	}
}
