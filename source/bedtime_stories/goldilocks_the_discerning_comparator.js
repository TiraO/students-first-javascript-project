const { Animal, Location, Species, Size, House, Foods, EventBus } = require("./bedime_stories");
let eventBus = new EventBus();

eventBus.once("time", () => {
  let goldilocks = new Animal(Species.Human, Size.Little);
  let mamaBear = new Animal(Species.Bear, Size.Medium);
  let papaBear = new Animal(Species.Bear, Size.Big);
  let babyBear = new Animal(Species.Bear, Size.Little);

  let woods = new Location("The Woods");

  let house = House.builder()
    .resident(mamaBear)
    .resident(papaBear)
    .resident(babyBear)
    .build();

  mamaBear.travelTo(woods);
  papaBear.travelTo(woods);
  babyBear.travelTo(woods);


});