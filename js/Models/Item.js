class Item {
	constructor(name, marketValue, group = 'Material') {
		this.name = name;
		this.marketValue = marketValue;
		this.group = group;
	}

	updateMarketValue(newMarketValue) {
		this.marketValue = newMarketValue;
	}
}
