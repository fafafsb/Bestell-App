/**
 * @type {Array<Object>} Array of items currently in the shopping basket.
 */
let basket = [];

/**
 *  // Dish objects with properties: id, name, price, description, headImage (optional), headline (optional).
 * @type {Array<Object>} Array of dishes available for selection.
 */
let myDishes = [
  {
    "id": 0,
    "headImage": "./assets/img/burger.png",
    "headline": "Burger",
    "name": "Classic Cheeseburger",
    "price": 12.50,
    "description": "Saftiges Rindfleischpatty mit geschmolzenem Cheddar, frischem Salat, Tomaten, Zwiebeln und Gurken – serviert im weichen Brioche-Bun mit Ketchup und Mayo."
  },

  {
    "id": 1,
    "name": "BBQ Bacon Burger",
    "price": 14.00,
    "description": "Rindfleischburger mit knusprigem Bacon, würziger BBQ-Sauce, Cheddar-Käse, Röstzwiebeln und knackigem Salat – ein herzhafter Genuss."
  },

  {
    "id": 2,
    "name": "Veggie Burger",
    "price": 11.80,
    "description": "Hausgemachtes Gemüsepatty auf Salat, Tomaten, Gurken und Avocadocreme – serviert im Vollkornbrötchen, frisch und fleischlos lecker."
  },

  {
    "id": 3,
    "name": "Chicken Burger",
    "price": 13.50,
    "description": "Knusprig paniertes Hähnchenfilet mit Coleslaw, Tomaten und Honig-Senf-Sauce – serviert im goldbraunen Bun. Aussen kross, innen zart."
  },
  
  {
    "id": 4,
    "headImage": "./assets/img/pizza.png",
    "headline": "Pizza",
    "name": "Pizza Margherita",
    "price": 10.00,
    "description": "Ein italienischer Klassiker: Dünner, knuspriger Boden mit fruchtiger Tomatensauce, zart schmelzendem Mozzarella und frischem Basilikum. Einfach, aber voller Geschmack."
  },

  {
    "id": 5,
    "name": "Pizza Salami",
    "price": 12.00,
   "description": "Herzhaft und beliebt: Knuspriger Pizzateig, belegt mit würziger Tomatensauce, Mozzarella und feiner Salami. Ein Klassiker für alle, die es deftig mögen."
  },

  {
    "id": 6,
    "name": "Pizza Funghi",
    "price": 11.50,
    "description": "Aromatische Champignons auf einer fruchtigen Tomatensauce mit cremigem Mozzarella. Abgerundet mit Kräutern – eine perfekte vegetarische Wahl."
  },

  {
    "id": 7,
    "name": "Pizza Prosciutto",
    "price": 13.00,
    "description": "Fein belegte Pizza mit luftgetrocknetem Schinken, Mozzarella und Tomatensauce. Nach dem Backen mit frischem Rucola und Parmesan veredelt – herzhaft und frisch zugleich."
  },

  {
    "id": 8,
    "headImage": "./assets/img/getränke.png",
    "headline": "Getränke",
    "name": "Rivella Rot (0.5l)",
    "price": 3.80,
    "description": "Der Schweizer Klassiker – leicht herb, angenehm süss und mit einem unverwechselbaren Geschmack. Erfrischt auf natürliche Weise."
  },

  {
    "id": 9,
    "name": "Cola (0.33l)",
    "price": 3.50,
    "description": "Klassisches Erfrischungsgetränk mit Koffein – eiskalt serviert, prickelnd und belebend."
  },

  {
    "id": 10,
    "name": "Red Bull (0.25l)",
    "price": 4.00,
    "description": "Der bekannte Energy-Drink mit Koffein und Taurin – belebt Körper und Geist, am besten gut gekühlt geniessen."
  },

  {
    "id": 11,
    "name": "Apfelschorle (0.5l)",
    "price": 3.80,
    "description": "Fruchtiger Apfelsaft, gemischt mit spritzigem Mineralwasser – ein natürlicher Durstlöscher mit angenehmer Süße."
  },

  {
    "id": 12,
    "headImage": "./assets/img/dessert.png",
    "headline": "Desserts",
    "name": "Tiramisu",
    "price": 6.50,
    "description": "Ein italienischer Klassiker mit Schichten aus luftigem Löffelbiskuit, Mascarponecreme und einem Hauch von Espresso – verfeinert mit Kakaopulver."
  },

  {
    "id": 13,
    "name": "Schokoladenmousse",
    "price": 5.80,
    "description": "Cremig-zartes Mousse aus dunkler Schokolade, leicht gekühlt serviert – ein himmlisches Dessert für Schokoladenliebhaber."
  },

  {
    "id": 14,
    "name": "Panna Cotta mit Beerensauce",
    "price": 6.00,
    "description": "Sahniges, italienisches Dessert mit feiner Vanillenote, serviert mit fruchtiger Beerensauce – süss und erfrischend zugleich."
  },

  {
    "id": 15,
    "name": "Apfelstrudel mit Vanillesauce",
    "price": 6.80,
    "description": "Warmer Apfelstrudel mit Zimt und Rosinen, serviert mit feiner Vanillesauce – ein traditioneller Genuss."
  }
];

