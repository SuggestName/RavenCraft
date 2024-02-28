// --- Carpentry --- //
//.addRecipe(new Recipe("Planks", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("Rough Plank", { "Small Log": 6 }, {"Rough Plank": 1}, "Carpentry", "Planks"));
recipesManager.addRecipe(new Recipe("Dense Plank", { "Dense Log": 4 }, {"Dense Plank": 1}, "Carpentry", "Planks"));
recipesManager.addRecipe(new Recipe("Refined Plank", { "Heavy Log": 8 }, {"Refined Plank": 1}, "Carpentry", "Planks"));
recipesManager.addRecipe(new Recipe("Treated Plank", { "Oil": 2, "Heavy Log": 12 }, {"Treated Plank": 1}, "Carpentry", "Planks"));
recipesManager.addRecipe(new Recipe("Heavy Plank", { "Oil": 2, "Dense Log": 8 }, {"Heavy Plank": 1}, "Carpentry", "Planks"));
recipesManager.addRecipe(new Recipe("Sturdy Plank", { "Oil": 4, "Sturdy Log": 10 }, {"Sturdy Plank": 1}, "Carpentry", "Planks"));
recipesManager.addRecipe(new Recipe("Fine Plank", { "Oil": 6, "Fine Log": 10 }, {"Fine Plank": 1}, "Carpentry", "Planks"));

//recipesManager.addRecipe(new Recipe("Bow", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("T1 Oakwood Bow", { "Coarse Thread": 1, "Rough Plank": 3 }, {"T1 Oakwood Bow": 1}, "Carpentry", "Bow"));
recipesManager.addRecipe(new Recipe("T2 Viper's Bow", { "Coarse Thread": 2, "Rough Plank": 6, "T1 Oakwood Bow": 1 }, {"T2 Viper's Bow": 1}, "Carpentry", "Bow"));
recipesManager.addRecipe(new Recipe("T3 Black Ash Bow", { "Sea Cured Leather": 12, "Refined Plank": 10, "Craftman's Thread": 5, "T2 Viper's Bow": 1 }, {"T3 Black Ash Bow": 1}, "Carpentry", "Bow"));
recipesManager.addRecipe(new Recipe("T4 Bullseye Bow", { "Sturdy String": 20, "Treated Plank": 18, "Fine Thread": 7, "T3 Black Ash Bow": 1 }, {"T4 Bullseye Bow": 1}, "Carpentry", "Bow"));
recipesManager.addRecipe(new Recipe("T5 Predator Bow", { "Hardwood": 24, "Sturdy Plank": 32, "Merchant's Thread": 14, "T4 Bullseye Bow": 1 }, {"T5 Predator Bow": 1}, "Carpentry", "Bow"));

//recipesManager.addRecipe(new Recipe("Tower Shield", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("T1 Wooden Bulwark", { "Rough Plank": 2 }, {"T1 Wooden Bulwark": 1}, "Carpentry", "Tower Shild"));
recipesManager.addRecipe(new Recipe("T2 Sentinel Shield", { "Rough Plank": 3, "Copper Ingot": 3, "T1 Wooden Bulwark": 1 }, {"T2 Sentinel Shield": 1}, "Carpentry", "Tower Shild"));
recipesManager.addRecipe(new Recipe("T3 Defender's Bulwak", { "Sea Cured Leather": 6, "Refined Plank": 6, "Iron Ingot": 8, "T2 Sentinel Shield": 1 }, {"T3 Defender's Bulwak": 1}, "Carpentry", "Tower Shild"));
recipesManager.addRecipe(new Recipe("T4 Steelclad Bulwak", { "Rough Steel Plate": 10, "Treated Plank": 12, "Steel Ingot": 10, "T3 Defender's Bulwak": 1 }, {"T4 Steelclad Bulwak": 1}, "Carpentry", "Tower Shild"));
recipesManager.addRecipe(new Recipe("T5 King's Defender", { "Heavy Metal Chunks": 12, "Sturdy Plank": 20, "Cobalt Ingot": 18, "T4 Steelclad Bulwak": 1 }, {"T5 King's Defender": 1}, "Carpentry", "Tower Shild"));

//recipesManager.addRecipe(new Recipe("Staff", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("T1 Mystic Staff", { "Rough Plank": 4 }, {"T1 Mystic Staff": 1}, "Carpentry", "Staff"));
recipesManager.addRecipe(new Recipe("T2 Warlock Staff", { "Rough Plank": 8, "T1 Mystic Staff": 1 }, {"T2 Warlock Staff": 1}, "Carpentry", "Staff"));
recipesManager.addRecipe(new Recipe("T3 Cultist Staff", { "Troll Fang": 12, "Refined Plank": 16, "Iron Ingot": 8, "T2 Warlock Staff": 1 }, {"T3 Cultist Staff": 1}, "Carpentry", "Staff"));
recipesManager.addRecipe(new Recipe("T4 Celestial Staff", { "Ambersprite Shard": 20, "Treated Plank": 12, "T3 Cultist Staff": 1 }, {"T4 Celestial Staff": 1}, "Carpentry", "Staff"));
recipesManager.addRecipe(new Recipe("T5 Lightshard Staff", { "Enervating Core": 24, "Sturdy Plank": 52, "T4 Celestial Staff": 1 }, {"T5 Lightshard Staff": 1}, "Carpentry", "Staff"));

//recipesManager.addRecipe(new Recipe("Bucker Shield", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("T1 Wooden Buckler", { "Rough Plank": 2 }, {"T1 Wooden Buckler": 1}, "Carpentry", "Bucker Shield"));
recipesManager.addRecipe(new Recipe("T2 Sturdy Buckler", { "Rough Plank": 3, "Coarse Leather": 1, "T1 Wooden Buckler": 1 }, {"T2 Sturdy Buckler": 1}, "Carpentry", "Bucker Shield"));
recipesManager.addRecipe(new Recipe("T3 Marauder's Shield", { "Sea Cured Leather": 6, "Refined Plank": 5, "Craftman's Leather": 2, "T2 Sturdy Buckler": 1 }, {"T3 Marauder's Shield": 1}, "Carpentry", "Bucker Shield"));
recipesManager.addRecipe(new Recipe("T4 Rune Shield", { "Rough Steel Plate": 10, "Treated Plank": 12, "Tanned Leather": 10, "T3 Marauder's Shield": 1 }, {"T4 Rune Shield": 1}, "Carpentry", "Bucker Shield"));
recipesManager.addRecipe(new Recipe("T5 Ravenguard's Shield", { "Heavy Metal Chunks": 12, "Sturdy Plank": 20, "Merchant's Leather": 4, "T4 Rune Shield": 1 }, {"T5 Ravenguard's Shield": 1}, "Carpentry", "Bucker Shield"));

//recipesManager.addRecipe(new Recipe("Sceptre", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("T1 Knotted Sceptre", { "Rough Plank": 2 }, {"T1 Knotted Sceptre": 1}, "Carpentry", "Sceptre"));
recipesManager.addRecipe(new Recipe("T2 Tribal Sceptre", { "Rough Plank": 4, "T1 Knotted Sceptre": 1 }, {"T2 Tribal Sceptre": 1}, "Carpentry", "Sceptre"));
recipesManager.addRecipe(new Recipe("T3 Serpent Sceptre", { "Troll Fang": 6, "Refined Plank": 10, "Iron Ingot": 8, "T2 Tribal Sceptre": 1 }, {"T3 Serpent Sceptre": 1}, "Carpentry", "Sceptre"));
recipesManager.addRecipe(new Recipe("T4 Crystal Sceptre", { "Ambersprite Shard": 10, "Treated Plank": 15, "T3 Serpent Sceptre": 1 }, {"T4 Crystal Sceptre": 1}, "Carpentry", "Sceptre"));
recipesManager.addRecipe(new Recipe("T5 Celestial Sceptre", { "Enervating Core": 12, "Sturdy Plank": 26, "T4 Crystal Sceptre": 1 }, {"T5 Celestial Sceptre": 1}, "Carpentry", "Sceptre"));

//recipesManager.addRecipe(new Recipe("Fishing ", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("Fishing Stick", { "Coarse Thread": 1, "Rough Plank": 1 }, {"Fishing Stick": 1}, "Carpentry", "Fishing"));
recipesManager.addRecipe(new Recipe("Fishing Rod", { "Coarse Thread": 2, "Rough Plank": 2, "Fishing Stick": 1 }, {"Fishing Rod": 1}, "Carpentry", "Fishing"));
recipesManager.addRecipe(new Recipe("Craftman's Fishing Rod", { "Craftman's Thread": 3, "Refined Plank": 3, "Fishing Rod": 1 }, {"Craftman's Fishing Rod": 1}, "Carpentry", "Fishing"));
recipesManager.addRecipe(new Recipe("Sailor's Fishing Rod", { "Fine Thread": 5, "Treated Plank": 3, "Craftman's Fishing Rod": 1 }, {"Sailor's Fishing Rod": 1}, "Carpentry", "Fishing"));
recipesManager.addRecipe(new Recipe("Artisan Fishing Rod", { "Merchant's Thread": 5, "Sturdy Plank": 3, "Sailor's Fishing Rod": 1 }, {"Artisan Fishing Rod": 1}, "Carpentry", "Fishing"));

//recipesManager.addRecipe(new Recipe("House Craft  ", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("Weak Table", { "Rough Plank": 8, "Nail": 2 }, {"Weak Table": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Frail Loom", { "Rough Plank": 10, "Simple Cloth": 6 }, {"Frail Loom": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Protective Charm", { "Rough Plank": 10, "Simple Cloth": 6 }, {"Protective Charm": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Basic Stabilizer", { "Rough Plank": 10, "Simple Cloth": 6 }, {"Basic Stabilizer": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Storage Container", { "Refined Plank": 8, "Nail": 1, "Iron Bar": 1 }, {"Storage Container": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Storage Container", { "Refined Plank": 20, "Nail": 5, "Steel Ingot": 10, "Iron Ingot": 20 }, {"Storage Container": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Chair", { "Refined Plank": 8, "Nail": 2 }, {"Chair": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Simple Bed", { "Refined Plank": 10, "Simple Cloth": 15, "Coarse Thread": 10 }, {"Simple Bed": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Wall Reinforcement", { "Refined Plank": 8, "Nail": 1, "Iron Bar": 1 }, {"Wall Reinforcement": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Energy Stabilizer", { "Treated Plank": 10, "Fine Thread": 5 }, {"Energy Stabilizer": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Simple Loom", { "Treated Plank": 10, "Fine Thread": 5 }, {"Simple Loom": 1}, "Carpentry", "House Craft"));
recipesManager.addRecipe(new Recipe("Warding Charm", { "Treated Plank": 10, "Fine Thread": 5 }, {"Warding Charm": 1}, "Carpentry", "House Craft"));

//recipesManager.addRecipe(new Recipe("Ship Craft", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("Mast", { "Refined Plank": 20, "Nail": 20, "Iron Ingot": 5 }, {"Mast": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Small Gun Deck", { "Refined Plank": 30, "Nail": 20, "Iron Ingot": 8 }, {"Small Gun Deck": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Small Fishing Storage", { "Refined Plank": 30, "Nail": 20, "Iron Ingot": 8 }, {"Small Fishing Storage": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Small Cargo Hold", { "Refined Plank": 30, "Nail": 20, "Iron Ingot": 8 }, {"Small Cargo Hold": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Small Hull Frame", { "Refined Plank": 50, "Nail": 40, "Iron Ingot": 10 }, {"Small Hull Frame": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Medium Gun Deck", { "Wooden Arch": 3, "Treated Plank": 50, "Nail": 40, "Iron Bar": 10 }, {"Medium Gun Deck": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Medium Fishing Storage", { "Wooden Arch": 3, "Treated Plank": 50, "Nail": 40, "Iron Bar": 10 }, {"Medium Fishing Storage": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Medium Cargo Hold", { "Wooden Arch": 3, "Treated Plank": 50, "Nail": 40, "Iron Bar": 10 }, {"Medium Cargo Hold": 1}, "Carpentry", "Ship Craft"));
recipesManager.addRecipe(new Recipe("Medium Hull Frame", { "Wooden Arch": 8, "Treated Plank": 120, "Nail": 80, "Iron Bar": 25 }, {"Medium Hull Frame": 1}, "Carpentry", "Ship Craft"));

//recipesManager.addRecipe(new Recipe("Ship Module  ", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("Small Ammunition Cabin Kit", { "Wooden Arch": 2, "Treated Plank": 50, "Bolt": 10, "Steel Ingot": 10 }, {"Small Ammunition Cabin Kit": 1}, "Carpentry", "Ship Module"));
recipesManager.addRecipe(new Recipe("Small Maintenance Unit Kit", { "Wooden Arch": 2, "Treated Plank": 50, "Bolt": 10, "Steel Ingot": 10 }, {"Small Maintenance Unit Kit": 1}, "Carpentry", "Ship Module"));
recipesManager.addRecipe(new Recipe("Small Fishing Crane Kit", { "Wooden Arch": 2, "Treated Plank": 50, "Bolt": 10, "Steel Ingot": 10 }, {"Small Fishing Crane Kit": 1}, "Carpentry", "Ship Module"));
recipesManager.addRecipe(new Recipe("Small Tradepack Container Kit", { "Wooden Arch": 2, "Treated Plank": 50, "Bolt": 10, "Steel Ingot": 10 }, {"Small Tradepack Container Kit": 1}, "Carpentry", "Ship Module"));

//recipesManager.addRecipe(new Recipe("Wagon Craft", {}, {}, "Carpentry"));
recipesManager.addRecipe(new Recipe("Common Wheel", { "Rough Plank": 10, "Nail": 5 }, {"Common Wheel": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Small Wagon Container", { "Rough Plank": 20, "Common Plate": 1 }, {"Small Wagon Container": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Wooden Arch", { "Refined Plank": 15, "Oil": 10 }, {"Wooden Arch": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Swift Wheel", { "Refined Plank": 10, "Nail": 5 }, {"Swift Wheel": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Common Wagon Container", { "Refined Plank": 25, "Common Plate": 3 }, {"Common Wagon Container": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Sturdy Wheel", { "Treated Plank": 16, "Bolt": 5, "Wooden Arch": 1 }, {"Sturdy Wheel": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Medium Wagon", { "Treated Plank": 20, "Reinforced Plate": 5, "Iron Bar": 5 }, {"Medium Wagon": 1}, "Carpentry", "Wagon Craft"));
recipesManager.addRecipe(new Recipe("Simple Wooden Arch", { "Treated Plank": 15, "Oil": 20 }, {"Simple Wooden Arch": 1}, "Carpentry", "Wagon Craft"));

// --- Blacksmithing --- //
//recipesManager.addRecipe(new Recipe("Ingots", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Copper Ingot", { "Copper Ore": 5 }, {"Copper Ingot": 1}, "Blacksmithing", "Ingots"));
recipesManager.addRecipe(new Recipe("Iron Ingot", { "Iron Ore": 5 }, {"Iron Ingot": 1}, "Blacksmithing", "Ingots"));
recipesManager.addRecipe(new Recipe("Steel Ingot", { "Coal": 2, "Iron Ore": 5 }, {"Steel Ingot": 1}, "Blacksmithing", "Ingots"));
recipesManager.addRecipe(new Recipe("Cobalt Ingot", { "Coal": 3, "Cobalt Ore": 5 }, {"Cobalt Ingot": 1}, "Blacksmithing", "Ingots"));
recipesManager.addRecipe(new Recipe("Titanium Ingot", { "Coal": 4, "Titanium Ore": 5 }, {"Titanium Ingot": 1}, "Blacksmithing", "Ingots"));

//recipesManager.addRecipe(new Recipe("Weapons", {}, {}, "Blacksmithing"));
//recipesManager.addRecipe(new Recipe("Hammer", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Shipbuilding Mallet", { "Copper Ingot": 8 }, {"T1 Shipbuilding Mallet": 1}, "Blacksmithing", "Hammer"));
recipesManager.addRecipe(new Recipe("T2 Crushing Hammer", { "Copper Ingot": 8, "Coarse Leather": 4, "T1 Shipbuilding Mallet": 1 }, {"T2 Crushing Hammer": 1}, "Blacksmithing", "Hammer"));
recipesManager.addRecipe(new Recipe("T3 Punisher's Gavel", { "Sea Cured Leather": 12, "Iron Ingot": 20, "Craftman's Leather": 8, "T2 Crushing Hammer": 1 }, {"T3 Punisher's Gavel": 1}, "Blacksmithing", "Hammer"));
recipesManager.addRecipe(new Recipe("T4 Lawgiver's Warhammer", { "Rough Steel Plate": 20, "Steel Ingot": 25, "Tanned Leather": 17, "T3 Punisher's Gavel": 1 }, {"T4 Lawgiver's Warhammer": 1}, "Blacksmithing", "Hammer"));
recipesManager.addRecipe(new Recipe("T5 Dwarven Warhammer", { "Heavy Metal Chunks": 24, "Cobalt Ingot": 60, "Merchant's Leather": 22, "T4 Lawgiver's Warhammer": 1 }, {"T5 Samurai's Daikatana": 1}, "Blacksmithing", "Hammer"));

//recipesManager.addRecipe(new Recipe("Greatsword", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Burnished Greatsword", { "Copper Ingot": 8 }, {"T1 Burnished Greatsword": 1}, "Blacksmithing", "Greatsword"));
recipesManager.addRecipe(new Recipe("T2 Valiant Greatsword", { "Copper Ingot": 6, "Coarse Leather": 6, "T1 Burnished Greatsword": 1 }, {"T2 Valiant Greatsword": 1}, "Blacksmithing", "Greatsword"));
recipesManager.addRecipe(new Recipe("T3 Heroic Greatsword", { "Troll Fang": 12, "Iron Ingot": 10, "Craftman's Leather": 10, "T2 Valiant Greatsword": 1 }, {"T3 Heroic Greatsword": 1}, "Blacksmithing", "Greatsword"));
recipesManager.addRecipe(new Recipe("T4 Bonebiter Greatsword", { "Thin Blade": 20, "Steel Ingot": 12, "Tanned Leather": 20, "T3 Heroic Greatsword": 1 }, {"T4 Bonebiter Greatsword": 1}, "Blacksmithing", "Greatsword"));
recipesManager.addRecipe(new Recipe("T5 Samurai's Daikatana", { "Ancient Metallic Scrap": 24, "Cobalt Ingot": 20, "Merchant's Leather": 30, "T4 Bonebiter Greatsword": 1 }, {"T5 Samurai's Daikatana": 1}, "Blacksmithing", "Greatsword"));

//recipesManager.addRecipe(new Recipe("Light Blade", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Skirmisher's Blade", { "Copper Ingot": 8 }, {"T1 Skirmisher's Blade": 1}, "Blacksmithing", "Light Blade"));
recipesManager.addRecipe(new Recipe("T2 Swashbuckler's Blade", { "Copper Ingot": 6, "Coarse Leather": 6, "T1 Skirmisher's Blade": 1 }, {"T2 Swashbuckler's Blade": 1}, "Blacksmithing", "Light Blade"));
recipesManager.addRecipe(new Recipe("T3 Serpentine Blade", { "Troll Fang": 12, "Iron Ingot": 10, "Craftman's Leather": 10, "T2 Swashbuckler's Blade": 1 }, {"T3 Serpentine Blade": 1}, "Blacksmithing", "Light Blade"));
recipesManager.addRecipe(new Recipe("T4 Duelist's Companion", { "Cunning Handle": 10, "Steel Ingot": 12, "Tanned Leather": 20, "T3 Serpentine Blade": 1 }, {"T4 Duelist's Companion": 1}, "Blacksmithing", "Light Blade"));
recipesManager.addRecipe(new Recipe("T5 Ornamented Saber", { "Twisted Blades": 24, "Cobalt Ingot": 20, "Merchant's Leather": 30, "T4 Duelist's Companion": 1 }, {"T5 Ornamented Saber": 1}, "Blacksmithing", "Light Blade"));

//recipesManager.addRecipe(new Recipe("Sword", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Rough Sword", { "Copper Ingot": 4 }, {"T1 Rough Sword": 1}, "Blacksmithing", "Sword"));
recipesManager.addRecipe(new Recipe("T2 Warden's Sword", { "Copper Ingot": 4, "Coarse Leather": 2, "T1 Rough Sword": 1 }, {"T2 Warden's Sword": 1}, "Blacksmithing", "Sword"));
recipesManager.addRecipe(new Recipe("T3 Lawbreaker's Sword", { "Troll Fang": 6, "Iron Ingot": 5, "Craftman's Leather": 5, "T2 Warden's Sword": 1 }, {"T3 Lawbreaker's Sword": 1}, "Blacksmithing", "Sword"));
recipesManager.addRecipe(new Recipe("T4 Guardian's Longsword", { "Thin Blade": 10, "Steel Ingot": 7, "Tanned Leather": 10, "T3 Lawbreaker's Sword": 1 }, {"T4 Guardian's Longsword": 1}, "Blacksmithing", "Sword"));
recipesManager.addRecipe(new Recipe("T5 Crusaider's Longsword", { "Ancient Metallic Scrap": 12, "Cobalt Ingot": 10, "Merchant's Leather": 15, "T4 Guardian's Longsword": 1 }, {"T5 Crusaider's Longsword": 1}, "Blacksmithing", "Sword"));

//recipesManager.addRecipe(new Recipe("Club", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Solid Mace", { "Copper Ingot": 4 }, {"T1 Solid Mace": 1}, "Blacksmithing", "Club"));
recipesManager.addRecipe(new Recipe("T2 Studded Flail", { "Copper Ingot": 3, "Coarse Leather": 3, "T1 Solid Mace": 1 }, {"T2 Studded Flail": 1}, "Blacksmithing", "Club"));
recipesManager.addRecipe(new Recipe("T3 Shieldbreaker's Flail", { "Sea Cured Leather": 6, "Iron Ingot": 10, "Craftman's Leather": 4, "T2 Studded Flail": 1 }, {"T3 Shieldbreaker's Flail": 1}, "Blacksmithing", "Club"));
recipesManager.addRecipe(new Recipe("T4 Ravenguard Morningstar", { "Rough Steel Plate": 10, "Steel Ingot": 16, "Tanned Leather": 8, "T3 Shieldbreaker's Flail": 1 }, {"T4 Ravenguard Morningstar": 1}, "Blacksmithing", "Club"));
recipesManager.addRecipe(new Recipe("T5 Enforcer's Mace", { "Heavy Metal Chunks": 12, "Cobalt Ingot": 30, "Merchant's Leather": 11, "T4 Ravenguard Morningstar": 1 }, {"T5 Enforcer's Mace": 1}, "Blacksmithing", "Club"));

//recipesManager.addRecipe(new Recipe("Dagger", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Serrated Dagger", { "Copper Ingot": 4 }, {"T1 Serrated Dagger": 1}, "Blacksmithing", "Dagger"));
recipesManager.addRecipe(new Recipe("T2 Noble Dagger", { "Copper Ingot": 4, "Coarse Leather": 2, "T1 Serrated Dagger": 1 }, {"T2 Noble Dagger": 1}, "Blacksmithing", "Dagger"));
recipesManager.addRecipe(new Recipe("T3 Ice Dagger", { "Troll Fang": 6, "Iron Ingot": 5, "Craftman's Leather": 5, "T2 Noble Dagger": 1 }, {"T3 Ice Dagger": 1}, "Blacksmithing", "Dagger"));
recipesManager.addRecipe(new Recipe("T4 Heartstopper Dagger", { "Cunning Handle": 10, "Steel Ingot": 7, "Tanned Leather": 10, "T3 Ice Dagger": 1 }, {"T4 Heartstopper Dagger": 1}, "Blacksmithing", "Dagger"));
recipesManager.addRecipe(new Recipe("T5 Assassin's Dagger", { "Twisted Blades": 12, "Cobalt Ingot": 10, "Merchant's Leather": 15, "T4 Heartstopper Dagger": 1 }, {"T5 Assassin's Dagger": 1}, "Blacksmithing", "Dagger"));

//recipesManager.addRecipe(new Recipe("Axe", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Wicked Axe", { "Copper Ingot": 4 }, {"T1 Wicked Axe": 1}, "Blacksmithing", "Axe"));
recipesManager.addRecipe(new Recipe("T2 Marauder's Axe", { "Copper Ingot": 3, "Coarse Leather": 3, "T1 Wicked Axe": 1 }, {"T2 Marauder's Axe": 1}, "Blacksmithing", "Axe"));
recipesManager.addRecipe(new Recipe("T3 Dread Axe", { "Sea Cured Leather": 12, "Iron Ingot": 10, "Craftman's Leather": 4, "T2 Marauder's Axe": 1 }, {"T3 Dread Axe": 1}, "Blacksmithing", "Axe"));
recipesManager.addRecipe(new Recipe("T4 Stormcarver Axe", { "Metallic Core": 10, "Steel Ingot": 16, "Tanned Leather": 8, "T3 Dread Axe": 1 }, {"T4 Stormcarver Axe": 1}, "Blacksmithing", "Axe"));
recipesManager.addRecipe(new Recipe("T5 Hellblade Axe", { "Cutting Edge Scrap": 12, "Cobalt Ingot": 30, "Merchant's Leather": 11, "T4 Stormcarver Axe": 1 }, {"T5 Hellblade Axe": 1}, "Blacksmithing", "Axe"));

//recipesManager.addRecipe(new Recipe("Greataxe", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Rough Greataxe", { "Copper Ingot": 8 }, {"T1 Rough Greataxe": 1}, "Blacksmithing", "Greataxe"));
recipesManager.addRecipe(new Recipe("T2 Warrior's Greataxe", { "Copper Ingot": 8, "Coarse Leather": 4, "T1 Rough Greataxe": 1 }, {"T2 Warrior's Greataxe": 1}, "Blacksmithing", "Greataxe"));
recipesManager.addRecipe(new Recipe("T3 Savage Battle Axe", { "Sea Cured Leather": 12, "Iron Ingot": 20, "Craftman's Leather": 8, "T2 Warrior's Greataxe": 1 }, {"T3 Savage Battle Axe": 1}, "Blacksmithing", "Greataxe"));
recipesManager.addRecipe(new Recipe("T4 Hangman's Greataxe", { "Metallic Core": 20, "Steel Ingot": 25, "Tanned Leather": 8, "T3 Savage Battle Axe": 1 }, {"T4 Hangman's Greataxe": 1}, "Blacksmithing", "Greataxe"));
recipesManager.addRecipe(new Recipe("T5 Orcish Battle Axe", { "Cutting Edge Scrap": 24, "Cobalt Ingot": 60, "Merchant's Leather": 22, "T4 Hangman's Greataxe": 1 }, {"T5 Orcish Battle Axe": 1}, "Blacksmithing", "Greataxe"));

//recipesManager.addRecipe(new Recipe("Armors", {}, {}, "Blacksmithing"));
//recipesManager.addRecipe(new Recipe("T1 Pliant Set", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("T1 Pliant Full Set", { "T1 Pliant Helmet": 1, "T1 Pliant Armor": 1, "T1 Pliant Legs": 1, "T1 Pliant Boots": 1 }, {"T1 Pliant Full Set": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Pliant Helmet", { "Copper Ingot": 3 }, {"T1 Pliant Helmet": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Pliant Armor", { "Copper Ingot": 3 }, {"T1 Pliant Armor": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Pliant Legs", { "Copper Ingot": 3 }, {"T1 Pliant Legs": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Pliant Boots", { "Copper Ingot": 3 }, {"T1 Pliant Boots": 1}, "Blacksmithing", "Armors"));

//recipesManager.addRecipe(new Recipe("T2 Crescent Set", {}, {}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Crescent Full Set", { "T2 Crescent Helmet": 1, "T2 Crescent Armor": 1, "T2 Crescent Legs": 1, "T2 Crescent Boots": 1 }, {"T2 Crescent Full Set": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Crescent Helmet", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Helmet": 1 }, {"T2 Crescent Helmet": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Crescent Armor", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Armor": 1 }, {"T2 Crescent Armor": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Crescent Legs", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Legs": 1 }, {"T2 Crescent Legs": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Crescent Boots", { "Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Boots": 1 }, {"T2 Crescent Boots": 1}, "Blacksmithing", "Armors"));

//recipesManager.addRecipe(new Recipe("T3 Harbinger Set", {}, {}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Harbinger Full Set", { "T3 Harbinger Helmet": 1, "T3 Harbinger Armor": 1, "T3 Harbinger Legs": 1, "T3 Harbinger Boots": 1 }, {"T3 Harbinger Full Set": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Harbinger Helmet", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Helmet": 1 }, {"T3 Harbinger Helmet": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Harbinger Armor", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Armor": 1 }, {"T3 Harbinger Armor": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Harbinger Legs", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Legs": 1 }, {"T3 Harbinger Legs": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Harbinger Boots", { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman's Leather": 3, "T2 Crescent Boots": 1 }, {"T3 Harbinger Boots": 1}, "Blacksmithing", "Armors"));

//recipesManager.addRecipe(new Recipe("T4 Enforcer Set", {}, {}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Enforcer Full Set", { "T4 Enforcer Helmet": 1, "T4 Enforcer Armor": 1, "T4 Enforcer Legs": 1, "T4 Enforcer Boots": 1 }, {"T4 Enforcer Full Set": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Enforcer Helmet", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Helmet": 1 }, {"T4 Enforcer Helmet": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Enforcer Armor", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Armor": 1 }, {"T4 Enforcer Armor": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Enforcer Legs", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Legs": 1 }, {"T4 Enforcer Legs": 1}, "Blacksmithing", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Enforcer Boots", { "Internal Padding": 5, "Steel Ingot": 18, "Tanned Leather": 3, "T3 Harbinger Boots": 1 }, {"T4 Enforcer Boots": 1}, "Blacksmithing", "Armors"));

//recipesManager.addRecipe(new Recipe("Whetstones", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Whetstone", { "Stone": 3 }, {"Whetstone": 1}, "Blacksmithing", "Whetstones"));
recipesManager.addRecipe(new Recipe("Coarse Whetstone", { "Coal": 1, "Stone": 6 }, {"Coarse Whetstone": 1}, "Blacksmithing", "Whetstones"));
recipesManager.addRecipe(new Recipe("Heavy Whetstone", { "Coal": 2, "Stone": 10 }, {"Heavy Whetstone": 1}, "Blacksmithing", "Whetstones"));
recipesManager.addRecipe(new Recipe("Solid Whetstone", { "Coal": 3, "Stone": 15 }, {"Solid Whetstone": 1}, "Blacksmithing", "Whetstones"));
recipesManager.addRecipe(new Recipe("Dense Whetstone", { "Coal": 5, "Stone": 25 }, {"Dense Whetstone": 1}, "Blacksmithing", "Whetstones"));

//recipesManager.addRecipe(new Recipe("Fishing", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Copper Fishing Hook", { "Copper Ingot": 4 }, {"Copper Fishing Hook": 1}, "Blacksmithing", "Fishing"));
recipesManager.addRecipe(new Recipe("Complex Fishing Hook", { "Iron Ingot": 7, "Copper Fishing Hook": 1 }, {"Complex Fishing Hook": 1}, "Blacksmithing", "Fishing"));
recipesManager.addRecipe(new Recipe("Steel Fishing Hook", { "Steel Ingot": 15, "Complex Fishing Hook": 1 }, {"Steel Fishing Hook": 1}, "Blacksmithing", "Fishing"));
recipesManager.addRecipe(new Recipe("Cobalt Fishing Hook", { "Cobalt Ingot": 25, "Steel Fishing Hook": 1 }, {"Cobalt Fishing Hook": 1}, "Blacksmithing", "Fishing"));
recipesManager.addRecipe(new Recipe("Titanium Fishing Hook", { "Titanium Ingot": 60, "Cobalt Fishing Hook": 1 }, {"Titanium Fishing Hook": 1}, "Blacksmithing", "Fishing"));

//recipesManager.addRecipe(new Recipe("House Craft ", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Basic Tools", { "Copper Ingot": 10, "Rough Plank": 4, "Coarse Leather": 1 }, {"Basic Tools": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Copper Anvil", { "Iron Ingot": 10, "Copper Ingot": 30 }, {"Copper Anvil": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Weak Rocks", { "Steel Ingot": 35, "Iron Ingot": 70 }, {"Weak Rocks": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Stone Block", { "Stone": 20 }, {"Stone Block": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Armory Rocks", { "Titanium Ingot": 45, "Cobalt Ingot": 80 }, {"Armory Rocks": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Woodwork Tools", { "Steel Ingot": 35, "Iron Ingot": 80 }, {"Woodwork Tools": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Stove", { "Steel Ingot": 20, "Stone": 10, "Iron Bar": 15, "Iron Ingot": 50, "Coal": 10 }, {"Stove": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Dense Block", { "Coal": 2, "Stone": 40 }, {"Dense Block": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Forging Tools", { "Craftman's Leather": 10, "Iron Ingot": 100, "Steel Ingot": 50, "Coal": 20 }, {"Forging Tools": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Furnace", { "Coal": 10, "Steel Ingot": 20, "Iron Bar": 5, "Stone": 20 }, {"Furnace": 1}, "Blacksmithing", "House Craft"));
recipesManager.addRecipe(new Recipe("Anvil", { "Steel Ingot": 35, "Iron Ingot": 70 }, {"Anvil": 1}, "Blacksmithing", "House Craft"));

//recipesManager.addRecipe(new Recipe("Misc", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Nail", { "Copper Ingot": 1 }, {"Nail": 1}, "Blacksmithing", "Misc"));
recipesManager.addRecipe(new Recipe("Common Plate", { "Copper Ingot": 10, "Rough Plank": 10, "Nail": 10 }, {"Common Plate": 1}, "Blacksmithing", "Misc"));
recipesManager.addRecipe(new Recipe("Reinforced Plate", { "Iron Ingot": 15, "Refined Plank": 15, "Bolt": 15 }, {"Reinforced Plate": 1}, "Blacksmithing", "Misc"));
recipesManager.addRecipe(new Recipe("Iron Bar", { "Iron Ingot": 1 }, {"Iron Bar": 1}, "Blacksmithing", "Misc"));
recipesManager.addRecipe(new Recipe("Bolt", { "Iron Ingot": 1 }, {"Bolt": 1}, "Blacksmithing", "Misc"));
recipesManager.addRecipe(new Recipe("Steel Bar", { "Steel Ingot": 2 }, {"Steel Bar": 1}, "Blacksmithing", "Misc"));

//recipesManager.addRecipe(new Recipe("Moa", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Simple Headgear", { "Copper Ingot": 10, "Coarse Leather": 4 }, {"Simple Headgear": 1}, "Blacksmithing", "Moa"));
recipesManager.addRecipe(new Recipe("Composed Headgear", { "Iron Ingot": 11, "Coarse Leather": 8 }, {"Composed Headgear": 1}, "Blacksmithing", "Moa"));
recipesManager.addRecipe(new Recipe("Advanced Headgear", { "Iron Ingot": 20, "Craftman's Leather": 7 }, {"Advanced Headgear": 1}, "Blacksmithing", "Moa"));
recipesManager.addRecipe(new Recipe("Artisan Headgear", { "Steel Ingot": 25, "Tanned Leather": 17 }, {"Artisan Headgear": 1}, "Blacksmithing", "Moa"));

//recipesManager.addRecipe(new Recipe("Ship Module ", {}, {}, "Blacksmithing"));
recipesManager.addRecipe(new Recipe("Simple Ship Emblems Kit", { "Iron Ingot": 220, "Coal": 50, "Common Wheel": 2 }, {"Simple Ship Emblems Kit": 1}, "Blacksmithing", "Ship Module"));
recipesManager.addRecipe(new Recipe("Minor Shielding Kit", { "Steel Ingot": 110, "Iron Ingot": 220 }, {"Minor Shielding Kit": 1}, "Blacksmithing", "Ship Module"));
recipesManager.addRecipe(new Recipe("Small Cannon Kit", { "Steel Ingot": 15, "Iron Ingot": 40, "Treated Plank": 10, "Common Wheel": 2 }, {"Small Cannon Kit": 1}, "Blacksmithing", "Ship Module"));
recipesManager.addRecipe(new Recipe("Basic Water Pumps Kit", { "Steel Ingot": 50, "Iron Ingot": 80, "Coal": 20}, {}, "Blacksmithing", "Ship Module"));

// --- Weaving --- //
//recipesManager.addRecipe(new Recipe("Cloth", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("Simple Cloth", { "Wool": 6 }, {"Simple Cloth": 1}, "Weaving", "Cloth"));
recipesManager.addRecipe(new Recipe("Craftman's Cloth", { "Wool": 4 }, {"Craftman's Cloth": 1}, "Weaving", "Cloth"));
recipesManager.addRecipe(new Recipe("Silk", { "Wool": 6 }, {"Silk": 1}, "Weaving", "Cloth"));
recipesManager.addRecipe(new Recipe("Merchant's Cloth", { "Wool": 8 }, {"Merchant's Cloth": 1}, "Weaving", "Cloth"));

//recipesManager.addRecipe(new Recipe("Leather", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("Coarse Leather", { "Hide": 2 }, {"Coarse Leather": 1}, "Weaving", "Leather"));
recipesManager.addRecipe(new Recipe("Craftman's Leather", { "Hide": 4 }, {"Craftman's Leather": 1}, "Weaving", "Leather"));
recipesManager.addRecipe(new Recipe("Tanned Leather", { "Hide": 6 }, {"Tanned Leather": 1}, "Weaving", "Leather"));
recipesManager.addRecipe(new Recipe("Merchant's Leather", { "Hide": 8 }, {"Merchant's Leather": 1}, "Weaving", "Leather"));

//recipesManager.addRecipe(new Recipe("Threads", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("Coarse Thread", { "Cotton": 3 }, {"Coarse Thread": 1}, "Weaving", "Threads"));
recipesManager.addRecipe(new Recipe("Craftman's Thread", { "Cotton": 6 }, {"Craftman's Thread": 1}, "Weaving", "Threads"));
recipesManager.addRecipe(new Recipe("Fine Thread", { "Cotton": 9 }, {"Fine Thread": 1}, "Weaving", "Threads"));
recipesManager.addRecipe(new Recipe("Merchant's Thread", { "Cotton": 12 }, {"Merchant's Thread": 1}, "Weaving", "Threads"));

//recipesManager.addRecipe(new Recipe("Armors ", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("T1 Cloth", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Shadecloth Full Set", { "T1 Shadecloth Helmet": 1, "T1 Shadecloth Armor": 1, "T1 Shadecloth Legs": 1, "T1 Shadecloth Boots": 1 }, {"T1 Shadecloth Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Shadecloth Helmet", { "Simple Cloth": 1 }, {"T1 Shadecloth Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Shadecloth Armor", { "Simple Cloth": 1 }, {"T1 Shadecloth Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Shadecloth Legs", { "Simple Cloth": 1 }, {"T1 Shadecloth Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Shadecloth Boots", { "Simple Cloth": 1 }, {"T1 Shadecloth Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T2 Cloth", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Viper's Full Set", { "T2 Viper's Helmet": 1, "T2 Viper's Armor": 1, "T2 Viper's Legs": 1, "T2 Viper's Boots": 1 }, {"T2 Viper's Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Viper's Helmet", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Helmet": 1 }, {"T2 Viper's Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Viper's Armor", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Armor": 1 }, {"T2 Viper's Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Viper's Legs", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Legs": 1 }, {"T2 Viper's Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Viper's Boots", { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Boots": 1 }, {"T2 Viper's Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T3 Cloth", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Profane Full Set", { "T3 Profane Helmet": 1, "T3 Profane Armor": 1, "T3 Profane Legs": 1, "T3 Profane Boots": 1 }, {"T3 Profane Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Profane Helmet", { "Shell Fragment": 3, "Craftman's Cloth": 3, "Craftman's Thread": 2, "T2 Viper's Helmet": 1 }, {"T3 Profane Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Profane Armor", { "Shell Fragment": 3, "Craftman's Cloth": 3, "Craftman's Thread": 2, "T2 Viper's Armor": 1 }, {"T3 Profane Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Profane Legs", { "Shell Fragment": 3, "Craftman's Cloth": 2, "Craftman's Thread": 3, "T2 Viper's Legs": 1 }, {"T3 Profane Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Profane Boots", { "Shell Fragment": 3, "Craftman's Cloth": 2, "Craftman's Thread": 3, "T2 Viper's Boots": 1 }, {"T3 Profane Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T4 Cloth", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Celestial Full Set", { "T4 Celestial Helmet": 1, "T4 Celestial Armor": 1, "T4 Celestial Legs": 1, "T4 Celestial Boots": 1 }, {"T4 Celestial Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Celestial Helmet", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Helmet": 1 }, {"T4 Celestial Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Celestial Armor", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Armor": 1 }, {"T4 Celestial Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Celestial Legs", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Legs": 1 }, {"T4 Celestial Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Celestial Boots", { "Phantasmagorical Cloth": 5, "Silk": 3, "Fine Thread": 3, "T3 Profane Boots": 1 }, {"T4 Celestial Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T1 Leather", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Hide Full Set", { "T1 Hide Helmet": 1, "T1 Hide Armor": 1, "T1 Hide Legs": 1, "T1 Hide Boots": 1 }, {"T1 Hide Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Hide Helmet", { "Coarse Leather": 1 }, {"T1 Hide Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Hide Armor", { "Coarse Leather": 1 }, {"T1 Hide Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Hide Legs", { "Coarse Leather": 1 }, {"T1 Hide Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T1 Hide Boots", { "Coarse Leather": 1 }, {"T1 Hide Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T2 Leather", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Nomad Full Set", { "T2 Nomad Helmet": 1, "T2 Nomad Armor": 1, "T2 Nomad Legs": 1, "T2 Nomad Boots": 1 }, {"T2 Nomad Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Nomad Helmet", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Helmet": 1 }, {"T2 Nomad Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Nomad Armor", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Armor": 1 }, {"T2 Nomad Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Nomad Legs", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Legs": 1 }, {"T2 Nomad Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T2 Nomad Boots", { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Boots": 1 }, {"T2 Nomad Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T3 Leather", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Bruiser Full Set", { "T3 Bruiser Helmet": 1, "T3 Bruiser Armor": 1, "T3 Bruiser Legs": 1, "T3 Bruiser Boots": 1 }, {"T3 Bruiser Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Bruiser Helmet", { "Shell Fragment": 3, "Craftman's Leather": 3, "Craftman's Thread": 2, "T2 Nomad Helmet": 1 }, {"T3 Bruiser Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Bruiser Armor", { "Shell Fragment": 3, "Craftman's Leather": 3, "Craftman's Thread": 2, "T2 Nomad Armor": 1 }, {"T3 Bruiser Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Bruiser Legs", { "Shell Fragment": 3, "Craftman's Leather": 2, "Craftman's Thread": 3, "T2 Nomad Legs": 1 }, {"T3 Bruiser Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T3 Bruiser Boots", { "Shell Fragment": 3, "Craftman's Leather": 2, "Craftman's Thread": 3, "T2 Nomad Boots": 1 }, {"T3 Bruiser Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("T4 Leather", {}, {}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Outlaw Full Set", { "T4 Outlaw Helmet": 1, "T4 Outlaw Armor": 1, "T4 Outlaw Legs": 1, "T4 Outlaw Boots": 1 }, {"T4 Outlaw Full Set": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Outlaw Helmet", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Helmet": 1 }, {"T4 Outlaw Helmet": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Outlaw Armor", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Armor": 1 }, {"T4 Outlaw Armor": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Outlaw Legs", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Legs": 1 }, {"T4 Outlaw Legs": 1}, "Weaving", "Armors"));
recipesManager.addRecipe(new Recipe("T4 Outlaw Boots", { "Kaiman Scale": 5, "Tanned Leather": 3, "Fine Thread": 3, "T3 Bruiser Boots": 1 }, {"T4 Outlaw Boots": 1}, "Weaving", "Armors"));

//recipesManager.addRecipe(new Recipe("Crafting Armors", {}, {}, "Weaving"));
//recipesManager.addRecipe(new Recipe("Weavin Craft T1", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("T1 Loom Full Set", { "T1 Loom Apprentice Helmet": 1, "T1 Loom Apprentice Armor": 1, "T1 Loom Apprentice Legs": 1, "T1 Loom Apprentice Boots": 1, "T1 Loom Apprentice Gloves": 1 }, {"T1 Loom Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Loom Apprentice Helmet", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, {"T1 Loom Apprentice Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Loom Apprentice Armor", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, {"T1 Loom Apprentice Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Loom Apprentice Legs", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, {"T1 Loom Apprentice Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Loom Apprentice Boots", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, {"T1 Loom Apprentice Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Loom Apprentice Gloves", { "Craftman's Thread": 8, "Craftman's Cloth": 8 }, {"T1 Loom Apprentice Gloves": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("Weavin Craft T2", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Threadspinner Full Set", { "T2 Threadspinner Helmet": 1, "T2 Threadspinner Armor": 1, "T2 Threadspinner Legs": 1, "T2 Threadspinner Boots": 1, "T2 Threadspinner Gloves": 1 }, {"T2 Threadspinner Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Threadspinner Helmet", { "Silk": 8, "Fine Thread": 3, "T1 Loom Apprentice Helmet": 1 }, {"T2 Threadspinner Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Threadspinner Armor", { "Silk": 8, "Fine Thread": 3, "T1 Loom Apprentice Armor": 1 }, {"T2 Threadspinner Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Threadspinner Legs", { "Silk": 3, "Fine Thread": 8, "T1 Loom Apprentice Legs": 1 }, {"T2 Threadspinner Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Threadspinner Boots", { "Silk": 3, "Fine Thread": 8, "T1 Loom Apprentice Boots": 1 }, {"T2 Threadspinner Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Threadspinner Gloves", { "Silk": 12, "Fine Thread": 9, "T1 Loom Apprentice Gloves": 1 }, {"T2 Threadspinner Gloves": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("Blacksmithing Craft T1", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Apprentice Full Set", { "T1 Apprentice Anvil Helmet": 1, "T1 Apprentice Anvil Armor": 1, "T1 Apprentice Anvil Legs": 1, "T1 Apprentice Anvil Boots": 1, "T1 Apprentice Anvil Bracers": 1 }, {"T1 Apprentice Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Apprentice Anvil Helmet", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, {"T1 Apprentice Anvil Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Apprentice Anvil Armor", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, {"T1 Apprentice Anvil Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Apprentice Anvil Legs", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, {"T1 Apprentice Anvil Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Apprentice Anvil Boots", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, {"T1 Apprentice Anvil Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Apprentice Anvil Bracers", { "Craftman's Thread": 8, "Craftman's Leather": 8 }, {"T1 Apprentice Anvil Bracers": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("Blacksmithing Craft T2", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Silversmith Full Set", { "T2 Silversmith Helmet": 1, "T2 Silversmith Armor": 1, "T2 Silversmith Legs": 1, "T2 Silversmith Boots": 1, "T2 Silversmith Bracers": 1 }, {"T2 Silversmith Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Silversmith Helmet", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Apprentice Anvil Helmet": 1 }, {"T2 Silversmith Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Silversmith Armor", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Apprentice Anvil Armor": 1 }, {"T2 Silversmith Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Silversmith Legs", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Apprentice Anvil Legs": 1 }, {"T2 Silversmith Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Silversmith Boots", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Apprentice Anvil Boots": 1 }, {"T2 Silversmith Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Silversmith Bracers", { "Tanned Leather": 12, "Fine Thread": 9, "T1 Apprentice Anvil Bracers": 1 }, {"T2 Silversmith Bracers": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("Cooking Craft T1", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Fry Full Set", { "T1 Fry Cook Helmet": 1, "T1 Fry Cook Armor": 1, "T1 Fry Cook Legs": 1, "T1 Fry Cook Boots": 1, "T1 Fry Cook Bracers": 1 }, {"T1 Fry Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Fry Cook Helmet", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, {"T1 Fry Cook Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Fry Cook Armor", { "Craftman's Thread": 3, "Craftman's Cloth": 5 }, {"T1 Fry Cook Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Fry Cook Legs", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, {"T1 Fry Cook Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Fry Cook Boots", { "Craftman's Thread": 5, "Craftman's Cloth": 3 }, {"T1 Fry Cook Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Fry Cook Bracers", { "Craftman's Thread": 8, "Craftman's Cloth": 8 }, {"T1 Fry Cook Bracers": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("Cooking Craft T2", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Sous Full Set", { "T2 Sous Chef Helmet": 1, "T2 Sous Chef Armor": 1, "T2 Sous Chef Legs": 1, "T2 Sous Chef Boots": 1, "T2 Sous Chef Bracers": 1 }, {"T2 Sous Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Sous Chef Helmet", { "Silk": 8, "Fine Thread": 3, "T1 Fry Cook Helmet": 1 }, {"T2 Sous Chef Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Sous Chef Armor", { "Silk": 8, "Fine Thread": 3, "T1 Fry Cook Armor": 1 }, {"T2 Sous Chef Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Sous Chef Legs", { "Silk": 3, "Fine Thread": 8, "T1 Fry Cook Legs": 1 }, {"T2 Sous Chef Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Sous Chef Boots", { "Silk": 3, "Fine Thread": 8, "T1 Fry Cook Boots": 1 }, {"T2 Sous Chef Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Sous Chef Bracers", { "Silk": 12, "Fine Thread": 9, "T1 Fry Cook Bracers": 1 }, {"T2 Sous Chef Bracers": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("T1 Carpentry Craft", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Workshop Full Set", { "T1 Workshop Assistant Helmet": 1, "T1 Workshop Assistant Armor": 1, "T1 Workshop Assistant Legs": 1, "T1 Workshop Assistant Boots": 1, "T1 Workshop Assistant Gloves": 1 }, {"T1 Workshop Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Workshop Assistant Helmet", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, {"T1 Workshop Assistant Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Workshop Assistant Armor", { "Craftman's Thread": 3, "Craftman's Leather": 5 }, {"T1 Workshop Assistant Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Workshop Assistant Legs", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, {"T1 Workshop Assistant Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Workshop Assistant Boots", { "Craftman's Thread": 5, "Craftman's Leather": 3 }, {"T1 Workshop Assistant Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T1 Workshop Assistant Gloves", { "Craftman's Thread": 8, "Craftman's Leather": 8 }, {"T1 Workshop Assistant Gloves": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("T2 Carpentry Craft", {}, {}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Woodworker Full Set", { "T2 Woodworker Helmet": 1, "T2 Woodworker Armor": 1, "T2 Woodworker Legs": 1, "T2 Woodworker Boots": 1, "T2 Woodworker Gloves": 1 }, {"T2 Woodworker Full Set": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Woodworker Helmet", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Workshop Assistant Helmet": 1 }, {"T2 Woodworker Helmet": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Woodworker Armor", { "Tanned Leather": 8, "Fine Thread": 3, "T1 Workshop Assistant Armor": 1 }, {"T2 Woodworker Armor": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Woodworker Legs", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Workshop Assistant Legs": 1 }, {"T2 Woodworker Legs": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Woodworker Boots", { "Tanned Leather": 3, "Fine Thread": 8, "T1 Workshop Assistant Boots": 1 }, {"T2 Woodworker Boots": 1}, "Weaving", "Crafting Armors"));
recipesManager.addRecipe(new Recipe("T2 Woodworker Gloves", { "Tanned Leather": 12, "Fine Thread": 9, "T1 Workshop Assistant Gloves": 1 }, {"T2 Woodworker Gloves": 1}, "Weaving", "Crafting Armors"));

//recipesManager.addRecipe(new Recipe("House Craft", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("Cheap Rug", { "Coarse Leather": 3, "Simple Cloth": 5 }, {"Cheap Rug": 1}, "Weaving", "House Craft"));
recipesManager.addRecipe(new Recipe("Carpet", { "Craftman's Thread": 5, "Craftman's Cloth": 10 }, {"Carpet": 1}, "Weaving", "House Craft"));
recipesManager.addRecipe(new Recipe("Thread Spool", { "Craftman's Thread": 8 }, {"Thread Spool": 1}, "Weaving", "House Craft"));
recipesManager.addRecipe(new Recipe("Cloth Roll", { "Craftman's Thread": 5, "Craftman's Cloth": 15 }, {"Cloth Roll": 1}, "Weaving", "House Craft"));
recipesManager.addRecipe(new Recipe("Luxury Carpet", { "Merchant's Thread": 15, "Merchant's Cloth": 15 }, {"Luxury Carpet": 1}, "Weaving", "House Craft"));
recipesManager.addRecipe(new Recipe("Luxury Thread Spool", { "Merchant's Thread": 25 }, {"Luxury Thread Spool": 1}, "Weaving", "House Craft"));
recipesManager.addRecipe(new Recipe("Refined Cloth Roll", { "Merchant's Thread": 5, "Merchant's Cloth": 15 }, {"Refined Cloth Roll": 1}, "Weaving", "House Craft"));

//recipesManager.addRecipe(new Recipe("Moa Equipment", {}, {}, "Weaving", "Moa Equipment"));
recipesManager.addRecipe(new Recipe("Simple Saddle", { "Coarse Leather": 10, "Copper Ingot": 4 }, {"Simple Saddle": 1}, "Weaving", "Moa Equipment"));
recipesManager.addRecipe(new Recipe("Composed Saddle", { "Coarse Leather": 11, "Iron Ingot": 8 }, {"Composed Saddle": 1}, "Weaving", "Moa Equipment"));
recipesManager.addRecipe(new Recipe("Advanced Saddle", { "Craftman's Leather": 20, "Iron Ingot": 10 }, {"Advanced Saddle": 1}, "Weaving", "Moa Equipment"));
recipesManager.addRecipe(new Recipe("Artisan Saddle", { "Tanned Leather": 25, "Steel Ingot": 10 }, {"Artisan Saddle": 1}, "Weaving", "Moa Equipment"));

//recipesManager.addRecipe(new Recipe("Ship Module", {}, {}, "Weaving"));
recipesManager.addRecipe(new Recipe("Small Sail Kit", { "Craftman's Cloth": 60, "Craftman's Leather": 30, "Craftman's Thread": 90 }, {"Small Sail Kit": 1}, "Weaving", "Ship Module"));
recipesManager.addRecipe(new Recipe("Small Fishing Nets Kit", { "Tanned Leather": 15, "Fine Thread": 50 }, {"Small Fishing Nets Kit": 1}, "Weaving", "Ship Module"));
recipesManager.addRecipe(new Recipe("Medium Sail Kit", { "Tanned Leather": 50, "Fine Thread": 150, "Silk": 100 }, {"Medium Sail Kit": 1}, "Weaving", "Ship Module"));
recipesManager.addRecipe(new Recipe("Medium Fishing Nets Kit", { "Merchant's Leather": 30, "Merchant's Thread": 130 }, {"Medium Fishing Nets Kit": 1}, "Weaving", "Ship Module"));
recipesManager.addRecipe(new Recipe("Large Sail Kit", { "Merchant's Leather": 120, "Merchant's Cloth": 240, "Merchant's Thread": 360 }, {"Large Sail Kit": 1}, "Weaving", "Ship Module"));

// --- Cooking --- //
//recipesManager.addRecipe(new Recipe("Baked Goods", {}, {}, "Cooking"));
recipesManager.addRecipe(new Recipe("Baked Potatoes", { "Potato": 4 }, {"Baked Potatoes": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Corn On a Cob", { "Corn": 2 }, {"Corn On a Cob": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Potato Bread", { "Corn": 1, "Potato": 3 }, {"Potato Bread": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Sajecho Hardtack", { "Orange Scales": 2, "Ground Flour": 2 }, {"Sajecho Hardtack": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Rohna Crackers", { "Ground Flour": 2 }, {"Rohna Crackers": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Glademire Crackers", { "Ground Flour": 6 }, {"Glademire Crackers": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Bun", { "Basic Seasoning": 1, "Ground Flour": 5 }, {"Bun": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Loaf Bread", { "Basic Seasoning": 1, "Ground Flour": 8 }, {"Loaf Bread": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Cookies", { "Basic Seasoning": 1, "Ground Flour": 8 }, {"Cookies": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Scone", { "Ground Flour": 5, "Milk": 1, "Basic Seasoning": 1 }, {"Scone": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Combread", { "Ground Flour": 5, "Corn": 1, "Basic Seasoning": 1 }, {"Combread": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Deluxe Cookies", { "Ground Flour": 9, "Butter": 1, "Basic Seasoning": 1 }, {"Deluxe Cookies": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Muffin", { "Ground Flour": 4, "Milk": 1, "Honey": 2 }, {"Muffin": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Bohel", { "Ground Flour": 4, "Egg": 2, "Gourmet Seasoning": 1 }, {"Bohel": 1}, "Cooking", "Baked Goods"));
recipesManager.addRecipe(new Recipe("Cake", { "Ground Flour": 6, "Milk": 1, "Egg": 2 }, {"Cake": 1}, "Cooking", "Baked Goods"));

//recipesManager.addRecipe(new Recipe("Drinks", {}, {}, "Cooking"));
recipesManager.addRecipe(new Recipe("Vodka", { "Potato": 5 }, {"Vodka": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Beer", { "Wheat": 5 }, {"Beer": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Landing Brandy", { "Apple": 1 }, {"Landing Brandy": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Apple Cider", { "Apple": 1 }, {"Apple Cider": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Wine", { "Brewer Yeast": 1, "Grape": 4 }, {"Wine": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Whiskey", { "Brewer Yeast": 1, "Corn": 4 }, {"Whiskey": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Orange Liqueur", { "Brewer Yeast": 1, "Orange": 1 }, {"Orange Liqueur": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Rum", { "Brewer Yeast": 1, "Apple": 2 }, {"Rum": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Blueberry Wine", { "Grape": 7, "Blueberry": 10, "Brewer Yeast": 2 }, {"Blueberry Wine": 1}, "Cooking", "Drinks"));
recipesManager.addRecipe(new Recipe("Boozemelon", { "Watermelon": 1, "Pumpkin": 1, "Brewer Yeast": 2 }, {"Boozemelon": 1}, "Cooking", "Drinks"));

//recipesManager.addRecipe(new Recipe("Meals", {}, {}, "Cooking"));
recipesManager.addRecipe(new Recipe("Corn Chowder", { "Corn": 3 }, {"Corn Chowder": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Corn Salad", { "Corn": 3 }, {"Corn Salad": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Scrambled Eggs", { "Egg": 2 }, {"Scrambled Eggs": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Apple Puree", { "Apple": 2 }, {"Apple Puree": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Mashed Potatoes", { "Potato": 8 }, {"Mashed Potatoes": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Carrot Soup", { "Potato": 3, "Carrot": 5 }, {"Carrot Soup": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Lyderian Fries", { "Oil": 1, "Potato": 12 }, {"Lyderian Fries": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Omelet", { "Milk": 2, "Egg": 2 }, {"Omelet": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Silky Scrambled Eggs", { "Butter": 1, "Egg": 2 }, {"Silky Scrambled Eggs": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Steamed Carrots", { "Basic Seasoning": 1, "Carrot": 4 }, {"Steamed Carrots": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Fruit Pancakes", { "Grape": 5, "Milk": 2, "Egg": 4, "Ground Flour": 6 }, {"Fruit Pancakes": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Smoked Garlic Sausage", { "Garlic": 2, "Shank": 2, "Basic Seasoning": 1, "Potato": 4 }, {"Smoked Garlic Sausage": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Charred Meat Kebab", { "Beef": 2, "Carrot": 2, "Cabbage": 2 }, {"Charred Meat Kebab": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Roasted Chiken And Veggies", { "Chicken": 2, "Carrot": 6, "Bean": 3 }, {"Roasted Chiken And Veggies": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Ravendawnian Porridge", { "Wheat": 5, "Apple": 3, "Milk": 3 }, {"Ravendawnian Porridge": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Rum Downslider", { "Fish Roe": 5, "Cabbage": 3, "Seafood Seasoning": 1 }, {"Rum Downslider": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Shaked Fruitmilk", { "Milk": 2, "Strawberry": 2, "Blueberry": 10 }, {"Shaked Fruitmilk": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Settler's Stew", { "Potato": 25, "Brocolli": 8, "Basic Seasoning": 2 }, {"Settler's Stew": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Dwarven Purple Shank", { "Shank": 2, "Grape": 4, "Orange": 2 }, {"Dwarven Purple Shank": 1}, "Cooking", "Meals"));
recipesManager.addRecipe(new Recipe("Filet Lucien", { "Brocolli": 1, "Beef": 1, "Ground Flour": 5, "Egg": 4 }, {"Filet Lucien": 1}, "Cooking", "Meals"));

//recipesManager.addRecipe(new Recipe("Ingredient", {}, {}, "Cooking"));
recipesManager.addRecipe(new Recipe("Oil", { "Corn": 1 }, {"Oil": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Basic Seasoning", { "Salt": 1 }, {"Basic Seasoning": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Seafood Seasoning", { "Orange Scales": 5, "Salt": 1 }, {"Seafood Seasoning": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Ground Flour", { "Wheat": 10 }, {"Ground Flour": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Ground Flour", { "Corn": 10 }, {"Ground Flour": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Butter", { "Milk": 2 }, {"Butter": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Brewer Yeast", { "Wheat": 3, "Orange Scales": 5 }, {"Brewer Yeast": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Gourmet Seasoning", { "Onion": 1, "Salt": 3 }, {"Gourmet Seasoning": 1}, "Cooking", "Ingredient"));
recipesManager.addRecipe(new Recipe("Rich Flour", { "Three-Leaf Clover": 1, "Ground Flour": 20 }, {"Rich Flour": 1}, "Cooking", "Ingredient"));

recipesManager.addRecipe(new Recipe("T2 Small Wooden Cabin", { "Ravencrest Emblem": 100, "Treated Plank": 20, "Stone Block": 20, "Nail": 30, "Dense Plank": 10 }, {"T3 Small Wooden House": 1}, "House Upgrades", "Small House - Upgrades"));
recipesManager.addRecipe(new Recipe("T3 Small Wooden House", { "Ravencrest Emblem": 100, "Treated Plank": 20, "Stone Block": 20, "Nail": 30, "Dense Plank": 10 }, {"T3 Small Wooden House": 1}, "House Upgrades", "Small House - Upgrades"));

recipesManager.addRecipe(new Recipe("T1 Small Bedroom", { "Ravencrest Emblem": 5, "Rough Plank": 3, "Coarse Leather": 2 }, {"T1 Small Bedroom": 1}, "House Upgrades", "Small House - Rooms"));
recipesManager.addRecipe(new Recipe("T1 Small Armory", { "Ravencrest Emblem": 5, "Rough Plank": 3, "Copper Ingot": 6 }, {"T1 Small Armory": 1}, "House Upgrades", "Small House - Rooms"));
recipesManager.addRecipe(new Recipe("T1 Small Weaving", { "Ravencrest Emblem": 5, "Rough Plank": 3, "Coarse Thread": 2 }, {"T1 Small Weaving": 1}, "House Upgrades", "Small House - Rooms"));
recipesManager.addRecipe(new Recipe("T1 Small Kitchen", { "Ravencrest Emblem": 5, "Stone": 15, "Copper Ingot": 8 }, {"T1 Small Kitchen": 1}, "House Upgrades", "Small House - Rooms"));
recipesManager.addRecipe(new Recipe("T1 Small Workshop", { "Ravencrest Emblem": 5, "Rough Plank": 5, "Copper Ingot": 2 }, {"T1 Small Workshop": 1}, "House Upgrades", "Small House - Rooms"));

recipesManager.addRecipe(new Recipe("T2 Medium Bedroom", { "Ravencrest Emblem": 10, "Simple Bed": 1, "Cheap Rug": 1, "Storage Container": 1 }, {"T2 Medium Bedroom": 1}, "House Upgrades", "Small House - Rooms"));
