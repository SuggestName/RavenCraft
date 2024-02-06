class Recipe {
    constructor(name, requirements, rewards, group = 'Default') {
        this.name = name;
        this.requirements = requirements;
        this.rewards = rewards;
        this.group = group;
    }

    hasRequirements() {
        return Object.keys(this.requirements).length > 0;
    }
}
