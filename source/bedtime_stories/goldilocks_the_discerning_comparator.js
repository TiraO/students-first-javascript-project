const { Animal, Location, Species, Size, Materials, House, FoodVarieties, Temperatures, Food, EventBus, Quality } = require("./bedtime_stories");
let eventBus = new EventBus();

eventBus.once("time", () => {
  let goldilocks = new Animal(Species.Human, Size.Little, Quality.Medium, "Goldilocks");
  let mamaBear = new Animal(Species.Bear, Size.Medium);
  let papaBear = new Animal(Species.Bear, Size.Big);
  let babyBear = new Animal(Species.Bear, Size.Little);

  let woods = new Location("The Woods");

  let house = House.builder()
    .material(Materials.Stone)
    .resident(mamaBear)
    .resident(papaBear)
    .resident(babyBear)
    .build();

  mamaBear.travelTo(woods);
  papaBear.travelTo(woods);
  babyBear.travelTo(woods);

  goldilocks.travelTo(woods);
  goldilocks.setHunger(10);
  goldilocks.travelTo(house);

  let response = house.requestEntry(goldilocks);
  house.addOccupant(goldilocks);

  let porridges = [
    new Food(FoodVarieties.Porridge, Temperatures.Cold),
    new Food(FoodVarieties.Porridge, Temperatures.Hot),
    new Food(FoodVarieties.Porridge, Temperatures.JustRight),
  ];

  goldilocks.eat(porridges[0]);
  goldilocks.eat(porridges[1]);
  goldilocks.eat(porridges[2]);

});

eventBus.dispatch("time");