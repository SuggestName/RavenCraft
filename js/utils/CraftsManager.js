class CraftsManager {
	constructor() {
		this.recipes = new Map();
		this.items = new Map();
	}

	addItem(item) {
		this.items.set(item.name, item);
	}

	addRecipe(recipe) {
		this.recipes.set(recipe.name, recipe);
	}

	getItem(name) {
		return this.items.get(name);
	}

	getRecipesByGroup(group) {
		return Array.from(this.recipes.values()).filter(recipe => recipe.group === group);
	}

	getRecipeGroups() {
		const groups = new Set();
		this.recipes.forEach(recipe => groups.add(recipe.group));
		return Array.from(groups);
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
			if (!item && !isRootCall) return;

			const recipe = this.recipes.get(itemName);

			const shouldIgnore = !isRootCall && ((options.ignorarMateriais && item.group === 'Material') || (options.ignorarItens && item.group === 'Item'));

			if (!recipe || shouldIgnore) {
				addItemCost(itemName, quantity, item.marketValue);
			} else {
				Object.entries(recipe.requirements).forEach(([reqItemName, reqQuantity]) => {
					calculateItemCost(reqItemName, reqQuantity * quantity, options, false);
				});
			}
		};

		calculateItemCost(itemName, quantity, options, isRootCall);

		return Array.from(costDetailsMap.values());
	}

	verifyAndLogMissingItems() {
        let missingItems = new Set();

        this.recipes.forEach((recipe, recipeName) => {
			if (!this.items.has(recipeName) && !missingItems.has(recipeName) && recipe.hasRequirements()) {
				missingItems.add(recipeName);
				console.log(`craftsManager.addItem(new Item("${recipeName}", 0, "Material"));`);
			}

            Object.keys(recipe.requirements).forEach(itemName => {
                if (!this.items.has(itemName) && !missingItems.has(itemName)) {
                    missingItems.add(itemName);
                    console.log(`craftsManager.addItem(new Item("${itemName}", 0, "Material"));`);
                }
            });
        });
    }
}

const craftsManager = new CraftsManager();