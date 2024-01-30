const catalogo = new Catalogo();

// Adicionando itens
catalogo.add("Materia Prima", "Hide", 278);
catalogo.add("Materia Prima", "Cotton", 248);

catalogo.add("Materia Prima", "Small Log", 65);
catalogo.add("Materia Prima", "Heavy Log", 55);

catalogo.add("Materia Prima", "Copper Ore", 45);
catalogo.add("Materia Prima", "Iron Ore", 320);

catalogo.add("Materia Prima", "Sea Cured Leather", 580);
catalogo.add("Materia Prima", "Shell Fragment", 888);

catalogo.add("Materiais Hide", "Coarse Leather", 490, { "Hide": 2 });
catalogo.add("Materiais Hide", "Craftman Leather", 1000, { "Hide": 4 });

catalogo.add("Materiais Cotton", "Coarse Thread", 530, { "Cotton": 3 });
catalogo.add("Materiais Cotton", "Craftman Thread", 1386, { "Cotton": 6 });

catalogo.add("Materiais Wood", "Rough Plank", 125, { "Small Log": 6 });
catalogo.add("Materiais Wood", "Refined Plank", 125, { "Heavy Log": 8 });

catalogo.add("Materiais Blacksmithing", "Cooper Ingot", 185, { "Copper Ore": 5 });
catalogo.add("Materiais Blacksmithing", "Iron Ingot", 1750, { "Iron Ore": 5 });

catalogo.add("Couro", "Hide Helmet T1", 365, { "Coarse Leather": 1 });
catalogo.add("Couro", "Hide Armor T1", 130, { "Coarse Leather": 1 });
catalogo.add("Couro", "Hide Legs T1", 400, { "Coarse Leather": 1 });
catalogo.add("Couro", "Hide Boots T1", 339, { "Coarse Leather": 1 });

catalogo.add("Couro", "Nomad Helmet T2", 1200, { "Coarse Leather": 1, "Coarse Thread": 1, "Hide Helmet T1": 1 });
catalogo.add("Couro", "Nomad Armor T2", 1300, { "Coarse Leather": 1, "Coarse Thread": 1, "Hide Armor T1": 1 });
catalogo.add("Couro", "Nomad Legs T2", 1700, { "Coarse Leather": 1, "Coarse Thread": 1, "Hide Legs T1": 1 });
catalogo.add("Couro", "Nomad Boots T2", 1700, { "Coarse Leather": 1, "Coarse Thread": 1, "Hide Boots T1": 1 });

catalogo.add("Couro", "Bruiser Helmet T3", 4400, { "Shell Fragment": 3, "Craftman Leather": 3, "Craftman Thread": 2, "Nomad Helmet T2": 1 });
catalogo.add("Couro", "Bruiser Armor T3", 3100, { "Shell Fragment": 3, "Craftman Leather": 3, "Craftman Thread": 2, "Nomad Armor T2": 1 });
catalogo.add("Couro", "Bruiser Legs T3", 6000, { "Shell Fragment": 3, "Craftman Leather": 2, "Craftman Thread": 3, "Nomad Legs T2": 1 });
catalogo.add("Couro", "Bruiser Boots T3", 8000, { "Shell Fragment": 3, "Craftman Leather": 2, "Craftman Thread": 3, "Nomad Boots T2": 1 });

catalogo.add("Plate", "Pliant Helmet T1", 780, { "Cooper Ingot": 3 });
catalogo.add("Plate", "Pliant Armor T1", 695, { "Cooper Ingot": 3 });
catalogo.add("Plate", "Pliant Legs T1", 759, { "Cooper Ingot": 3 });
catalogo.add("Plate", "Pliant Boots T1", 770, { "Cooper Ingot": 3 });

catalogo.add("Plate", "Crescent Helmet	T2", 1600, {"Cooper Ingot": 3, "Coarse Leather": 1, "Pliant Helmet T1": 1 });
catalogo.add("Plate", "Crescent Armor T2", 1546, {"Cooper Ingot": 3, "Coarse Leather": 1, "Pliant Armor T1": 1 });
catalogo.add("Plate", "Crescent Legs T2", 1899, {"Cooper Ingot": 3, "Coarse Leather": 1, "Pliant Legs T1": 1 });
catalogo.add("Plate", "Crescent Boots T2", 2198, {"Cooper Ingot": 3, "Coarse Leather": 1, "Pliant Boots T1": 1 });

catalogo.add("Plate", "Harbinger Helmet T3", 16900, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "Crescent Helmet T2": 1 });
catalogo.add("Plate", "Harbinger Armor T3", 13000, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "Crescent Armor T2": 1 });
catalogo.add("Plate", "Harbinger Legs T3", 17900, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "Crescent Legs T2": 1 });
catalogo.add("Plate", "Harbinger Boots T3", 14700, { "Shell Fragment": 3, "Iron Ingot": 10, "Craftman Leather": 3, "Crescent Boots T2": 1 });

catalogo.add("Armas", "Oaskwood Bow T1", 405, { "Coarse Thread": 1, "Rough Plank": 3});
catalogo.add("Armas", "Viper Bow T2", 1100, { "Coarse Thread": 2, "Rough Plank": 6, "Oaskwood Bow T1": 1 });
catalogo.add("Armas", "Black Ashe Bow T3", 4000, { "Sea Cured Leather": 12, "Refined Plank": 10, "Craftman Thread": 5, "Viper Bow T2": 1 });