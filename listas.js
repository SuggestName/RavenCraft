const catalogo = new Catalogo();

// Adicionando itens
catalogo.add("Materia-Prima Husbandry", "Shank", 20);
catalogo.add("Materia-Prima Husbandry", "Hide", 278);
catalogo.add("Materia-Prima Husbandry", "Cotton", 248);
catalogo.add("Materia-Prima Husbandry", "Spool of Hair", 80);
catalogo.add("Materia-Prima Husbandry", "Wool", 285);

catalogo.add("Materia-Prima Woodcutting", "Small Log", 65);
catalogo.add("Materia-Prima Woodcutting", "Dense Log", 3700);
catalogo.add("Materia-Prima Woodcutting", "Heavy Log", 55);
catalogo.add("Materia-Prima Woodcutting", "Sturdy Log", 40);

catalogo.add("Materia-Prima Mining", "Copper Ore", 45);
catalogo.add("Materia-Prima Mining", "Iron Ore", 320);
catalogo.add("Materia-Prima Mining", "Stone", 33);
catalogo.add("Materia-Prima Mining", "Salt", 100);
catalogo.add("Materia-Prima Mining", "Coal", 170);

catalogo.add("Materiais Loot", "Sea Cured Leather", 580);
catalogo.add("Materiais Loot", "Shell Fragment", 888);

catalogo.add("Materiais Weaving", "Coarse Leather", 490, { "Hide": 2 });
catalogo.add("Materiais Weaving", "Craftman Leather", 1000, { "Hide": 4 });

catalogo.add("Materiais Weaving", "Coarse Thread", 530, { "Cotton": 3 });
catalogo.add("Materiais Weaving", "Craftman Thread", 1386, { "Cotton": 6 });

catalogo.add("Materiais Weaving", "Simple Cloth", 290, { "Spool of Hair": 6 });
catalogo.add("Materiais Weaving", "Craftman Cloth", 1025, { "Wool": 4 });

catalogo.add("Materiais Carpentry", "Rough Plank", 125, { "Small Log": 6 });
catalogo.add("Materiais Carpentry", "Refined Plank", 125, { "Heavy Log": 8 });

catalogo.add("Materiais Blacksmithing", "Copper Ingot", 185, { "Copper Ore": 5 });
catalogo.add("Materiais Blacksmithing", "Iron Ingot", 1750, { "Iron Ore": 5 });
catalogo.add("Materiais Blacksmithing", "Steel Ingot", 2700, { "Coal": 2, "Iron Ore": 5 });

catalogo.add("Set de Pano", "T1 Shadecloth Helmet", 389, { "Simple Cloth": 1 });
catalogo.add("Set de Pano", "T1 Shadecloth Armor", 130, { "Simple Cloth": 1 });
catalogo.add("Set de Pano", "T1 Shadecloth Legs", 400, { "Simple Cloth": 1 });
catalogo.add("Set de Pano", "T1 Shadecloth Boots", 200, { "Simple Cloth": 1 });

catalogo.add("Set de Pano", "T2 Viper Helmet", 1340, { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Helmet": 1 });
catalogo.add("Set de Pano", "T2 Viper Armor", 1000, { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Armor": 1 });
catalogo.add("Set de Pano", "T2 Viper Legs", 1400, { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Legs": 1 });
catalogo.add("Set de Pano", "T2 Viper Boots", 1790, { "Simple Cloth": 1, "Coarse Thread": 1, "T1 Shadecloth Boots": 1 });

catalogo.add("Set de Pano", "T3 Profane Helmet", 8000, { "Shell Fragment": 3, "Craftman Cloth": 3, "Craftman Thread": 2, "T2 Viper Helmet": 1 });
catalogo.add("Set de Pano", "T3 Profane Armor", 7500, { "Shell Fragment": 3, "Craftman Cloth": 3, "Craftman Thread": 2, "T2 Viper Armor": 1 });
catalogo.add("Set de Pano", "T3 Profane Legs", 8500, { "Shell Fragment": 3, "Craftman Cloth": 2, "Craftman Thread": 3, "T2 Viper Legs": 1 });
catalogo.add("Set de Pano", "T3 Profane Boots", 8000, { "Shell Fragment": 3, "Craftman Cloth": 2, "Craftman Thread": 3, "T2 Viper Boots": 1 });

catalogo.add("Set de Couro", "T1 Hide Helmet", 365, { "Coarse Leather": 1 });
catalogo.add("Set de Couro", "T1 Hide Armor", 130, { "Coarse Leather": 1 });
catalogo.add("Set de Couro", "T1 Hide Legs", 400, { "Coarse Leather": 1 });
catalogo.add("Set de Couro", "T1 Hide Boots", 339, { "Coarse Leather": 1 });

catalogo.add("Set de Couro", "T2 Nomad Helmet", 1200, { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Helmet": 1 });
catalogo.add("Set de Couro", "T2 Nomad Armor", 1300, { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Armor": 1 });
catalogo.add("Set de Couro", "T2 Nomad Legs", 1700, { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Legs": 1 });
catalogo.add("Set de Couro", "T2 Nomad Boots", 1700, { "Coarse Leather": 1, "Coarse Thread": 1, "T1 Hide Boots": 1 });

catalogo.add("Set de Couro", "T3 Bruiser Helmet", 4400, { "Shell Fragment": 3, "Craftman Leather": 3, "Craftman Thread": 2, "T2 Nomad Helmet": 1 });
catalogo.add("Set de Couro", "T3 Bruiser Armor", 3100, { "Shell Fragment": 3, "Craftman Leather": 3, "Craftman Thread": 2, "T2 Nomad Armor": 1 });
catalogo.add("Set de Couro", "T3 Bruiser Legs", 6000, { "Shell Fragment": 3, "Craftman Leather": 2, "Craftman Thread": 3, "T2 Nomad Legs": 1 });
catalogo.add("Set de Couro", "T3 Bruiser Boots", 8000, { "Shell Fragment": 3, "Craftman Leather": 2, "Craftman Thread": 3, "T2 Nomad Boots": 1 });

catalogo.add("Set de Plate", "T1 Pliant Helmet", 780, { "Copper Ingot": 3 });
catalogo.add("Set de Plate", "T1 Pliant Armor", 695, { "Copper Ingot": 3 });
catalogo.add("Set de Plate", "T1 Pliant Legs", 759, { "Copper Ingot": 3 });
catalogo.add("Set de Plate", "T1 Pliant Boots", 770, { "Copper Ingot": 3 });

catalogo.add("Set de Plate", "T2 Crescent Helmet", 1600, {"Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Helmet": 1 });
catalogo.add("Set de Plate", "T2 Crescent Armor", 1546, {"Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Armor": 1 });
catalogo.add("Set de Plate", "T2 Crescent Legs", 1899, {"Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Legs": 1 });
catalogo.add("Set de Plate", "T2 Crescent Boots", 2198, {"Copper Ingot": 3, "Coarse Leather": 1, "T1 Pliant Boots": 1 });

catalogo.add("Set de Plate", "T3 Harbinger Helmet", 16900, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "T2 Crescent Helmet": 1 });
catalogo.add("Set de Plate", "T3 Harbinger Armor", 13000, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "T2 Crescent Armor": 1 });
catalogo.add("Set de Plate", "T3 Harbinger Legs", 17900, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "T2 Crescent Legs": 1 });
catalogo.add("Set de Plate", "T3 Harbinger Boots", 14700, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "T2 Crescent Boots": 1 });

catalogo.add("Armas Carpentry", "T1 Oaskwood Bow", 405, { "Coarse Thread": 1, "Rough Plank": 3});
catalogo.add("Armas Carpentry", "T2 Viper Bow", 1100, { "Coarse Thread": 2, "Rough Plank": 6, "T1 Oaskwood Bow": 1 });
catalogo.add("Armas Carpentry", "T3 Black Ashe Bow", 4000, { "Sea Cured Leather": 12, "Refined Plank": 10, "Craftman Thread": 5, "T2 Viper Bow": 1 });

catalogo.add("Armas Blacksmithing", "T1 Shipbuilding Mallet", 370, { "Copper Ingot": 8});
catalogo.add("Armas Blacksmithing", "T1 Rough Sword", 400, { "Copper Ingot": 4});
catalogo.add("Armas Blacksmithing", "T1 Solid Mace", 550, { "Copper Ingot": 4});
catalogo.add("Armas Blacksmithing", "T1 Serrated Dagger", 200, { "Copper Ingot": 4});
catalogo.add("Armas Blacksmithing", "T1 Wicked Axe", 200, { "Copper Ingot": 4});
catalogo.add("Armas Blacksmithing", "T1 Burnished Greatsword", 350, { "Copper Ingot": 8});
catalogo.add("Armas Blacksmithing", "T1 Rough Greataxe", 350, { "Copper Ingot": 8});
