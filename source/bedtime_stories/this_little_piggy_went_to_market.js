const { Animal, Market, Species, Size, House, Foods, EventBus } = require("./bedime_stories");
let eventBus = new EventBus();

eventBus.once("time", () => {
  let market = new Market();
  let piggies = [new Animal(Species.Pig, Size.Little), new Animal(Species.Pig, Size.Little)];
  let home = House.builder()
    .resident(piggies[0])
    .resident(piggies[1])
    .build();

  piggies[0].runTo(market);
  piggies[1].runTo(home);
  piggies[0].eat(Foods.RoastBeef);
  piggies[1].eat(null);
  piggies[0].goHome("whee");

});
eventBus.dispatch("time");