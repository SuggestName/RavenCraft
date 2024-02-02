class Item {
    constructor(name, marketValue, type = 'Material') {
      this.name = name;
      this.marketValue = marketValue;
      this.type = type;
    }
  
    updateMarketValue(newMarketValue) {
      this.marketValue = newMarketValue;
    }
  }
  