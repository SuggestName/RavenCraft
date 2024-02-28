class RecipesManager {
	constructor() {
		this.recipes = new Map();
	}

	addRecipe(recipe) {
		this.recipes.set(recipe.name, recipe);
	}

	getRecipe(name) {
        return this.recipes.get(name);
    }
	
    // Retorna todas as profissões únicas
	getAllProfessions() {
		const professions = new Set();
		for (let recipe of this.recipes.values()) {
			professions.add(recipe.profession);
		}
		return Array.from(professions);
	}

    // Retorna todos os grupos únicos para uma dada profissão
    getGroupsByProfession(profession) {
        const groups = new Set();
        for (let recipe of this.recipes.values()) {
            if (recipe.profession === profession) {
                groups.add(recipe.group);
            }
        }
        return Array.from(groups);
    }

	// Retorna todos os itens por profissão
	getItemsByProfession(profession) {
		const items = [];
		for (let recipe of this.recipes.values()) {
			if (recipe.profession === profession) {
				items.push(recipe);
			}
		}
		return items;
	}

	// Retorna todos os itens por grupo
	getItemsByGroup(group) {
		const items = [];
		for (let recipe of this.recipes.values()) {
			if (recipe.group === group) {
				items.push(recipe);
			}
		}
		return items;
	}

	// Retorna todos os itens por profissão e grupo
	getItemsByProfessionAndGroup(profession, group) {
		const items = [];
		for (let recipe of this.recipes.values()) {
			if (recipe.profession === profession && recipe.group === group) {
				items.push(recipe);
			}
		}
		return items;
	}
}

const recipesManager = new RecipesManager();
