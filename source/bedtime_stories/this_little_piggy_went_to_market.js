const { Animal, Market, Species, Size, House, FoodVarieties, EventBus, Food, Temperatures } = require("./bedime_stories");
let eventBus = new EventBus();

eventBus.once("time", () => {
  let market = new Market();
  let piggies = [new Animal(Species.Pig, Size.Little), new Animal(Species.Pig, Size.Little), new Animal(Species.Pig, Size.Little), new Animal(Species.Pig, Size.Little), new Animal(Species.Pig, Size.Little)];
  let home = House.builder()
    .resident(piggies[0])
    .resident(piggies[1])
    .resident(piggies[2])
    .resident(piggies[3])
    .resident(piggies[4])
    .build();

  piggies[0].travelTo(market);
  piggies[1].travelTo(home);
  piggies[2].eat(new Food(FoodVarieties.RoastBeef, Temperatures.JustRight));
  piggies[3].eat(null);
  piggies[4].goHome("whee");

});
eventBus.dispatch("time");