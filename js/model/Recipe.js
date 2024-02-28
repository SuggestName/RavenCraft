class Recipe {
    constructor(name, requirements, rewards, profession, group) {
        this.name = name;
        this.requirements = requirements;
        this.rewards = rewards;
        this.profession = profession;
        this.group = group
    }

    hasRequirements() {
        return Object.keys(this.requirements).length > 0;
    }
}
