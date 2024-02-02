class Recipe {
    constructor(output, requirements, type = 'Default') {
        this.output = output; // Item produced by this recipe
        this.requirements = requirements; // Map of Item names to quantities required
        this.type = type; // Tipo da receita
    }

    // Método para verificar se os requisitos estão vazios
    hasRequirements() {
        return Object.keys(this.requirements).length > 0;
    }
}
