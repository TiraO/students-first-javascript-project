class EventBus {
  constructor() {
    this.eventHandlers = {
      "time": []
    }
  }

  dispatch(eventName) {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }

    this.eventHandlers[eventName].forEach((action) => {
      action();
    })
  }

  once(eventName, action) {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    let hasHappenedOnce = false;
    this.eventHandlers[eventName].push(function (event) {
      if (!hasHappenedOnce) {
        hasHappenedOnce = true;

        action(event);
      }
    })
  }
}

let eventBus = new EventBus();

const Species = {
  Pig: "Pig",
  Bear: "Bear",
  Human: "Human",
  Wolf: "Wolf",
  Fox: "Fox",
};

class Material {
  constructor(name, strength) {
    this.name = name;
    this.strength = strength;
  }
}

const Materials = {
  Straw: new Material("Straw", 1),
  Gingerbread: new Material("Gingerbread", 2),
  Sticks: new Material("Sticks", 4),
  Brick: new Material("Brick", 10),
  Stone: new Material("Stone", 10),
  Shoe: new Material("Shoe", 7)
};

const Size = {
  Little: 1,
  Small: 1,
  Medium: 2,
  Big: 3
};

const Quality = {
  Bad: 1,
  Medium: 5,
  JustRight: 10
};

class Temperature {
  constructor(name, degrees) {
    this.name = name;
    this.degrees = degrees;
  }
}

const Temperatures = {
  Cold: new Temperature("Cold", 50),
  JustRight: new Temperature("Just Right", 130),
  Hot: new Temperature("Hot", 211),
};

const Speed = {
  AsFastAsTheyCan: 10
};

class Animal {
  constructor(species, size = Size.Medium, quality = Quality.Medium, name) {
    this.species = species;
    this.size = size;
    this.quality = quality;
    this.home = null;
    this.location = null;
    this.hunger = 1;
    this.name = name;
  }

  setHunger(hunger) {
    this.hunger = hunger;
  }

  huff(object) {
    object.applyDamage(2);
  }

  puff(object) {
    object.applyDamage(5);
  }

  goHome(sound = null) {
    if (sound) {
      console.log(sound, sound, sound);
    }
    this.runTo(this.home);
  }

  travelTo(targetLocation) {
    if (this.location instanceof House) {
      this.location.removeOccupant(this);
    }
    this.location = targetLocation;
  }

  runTo(targetLocation) {
    this.location = targetLocation;
  }

  getDescription() {
    if (this.name) {
      return this.name;
    } else {
      return this.species;
    }
  }

  eat(food) {
    if (food) {
      console.log("this " + this.getDescription() + " had " + food.temperature.name + " " + food.variety);
    } else {
      console.log("this " + this.getDescription() + " had none")
    }
  }
}

class BuildingBuilder {
  constructor() {
    this.buildingOptions = {
      residents: []
    };
  }

  material(material) {
    this.buildingOptions.material = material;
    return this;
  }

  resident(resident) {
    this.buildingOptions.residents.push(resident);
    return this;
  }

  build() {
    return new House(this.buildingOptions);
  }
}

class Door {
  constructor() {
    this.closed = true;
  }
}

class Market {

}

const FoodVarieties = {
  RoastBeef: "Roast Beef",
  Porridge: "Porridge",
};

class Food {
  constructor(variety, temperature) {
    this.variety = variety;
    this.temperature = temperature;
  }
}

class Location {
  constructor(name) {
    this.name = name;
  }
}

class House {
  static builder() {
    return new BuildingBuilder();
  }

  constructor(options) {
    this.damage = 0;
    this.material = options.material;
    this.occupants = new Set();
    this.door = new Door();

    if (options.residents) {
      options.residents.forEach((animal) => {
        this.addOccupant(animal);
        animal.home = this;
      })
    }
  }

  addOccupant(animal) {
    this.occupants.add(animal);
    animal.location = this;
  }

  removeOccupant(animal) {
    this.occupants.delete(animal);
    if (animal.location === this) {
      animal.location = null;
    }
  }

  requestEntry(requester) {
    let response = {
      accessGranted: false,
    };
    this.occupants.forEach((occupant) => {

    });

    if (!this.door.closed) {
      response.accessGranted = true;
    }
    return response;
  }

  applyDamage(force) {
    if (force > this.material.strength) {
      this.damage += force;
    }
  }

  isDestroyed() {
    return this.damage >= 5;
  }
}

class UnHuffPuffableException extends Error {
  constructor(house, animal) {
    super(animal.species + " could not blow down " + house.material.name + " house.");
  }
}

function liveHappilyEverAfter(...animals) {
  animals.forEach((animal, index) => {
    console.log(animal.species + " " + index + " lived happily ever after");
  })
}

eventBus.once("time", function () {
  let littlePigs = [
    new Animal(Species.Pig, Size.Little),
    new Animal(Species.Pig, Size.Little),
    new Animal(Species.Pig, Size.Little)];

  let houses = [];

  houses.push(
    House.builder()
      .material(Materials.Straw)
      .resident(littlePigs[0])
      .build());

  houses.push(
    House.builder()
      .material(Materials.Sticks)
      .resident(littlePigs[1])
      .build()
  );

  houses.push(
    House.builder()
      .material(Materials.Brick)
      .resident(littlePigs[2])
      .build()
  );

  let wolf = new Animal(Species.Wolf, Size.Big, Quality.Bad);

  try {
    houses.forEach((house, index) => {
      let entryResponse = house.requestEntry(wolf);
      if (!entryResponse.accessGranted) {

        wolf.huff(house);
        wolf.puff(house);
        if (!house.isDestroyed()) {
          throw new UnHuffPuffableException(house, wolf);
        }

        house.occupants.forEach((occupant) => {
          occupant.runTo(houses[index + 1]);
        });
      }
    });
  } catch (error) {
    console.log(error.message);
    liveHappilyEverAfter(...littlePigs);
    return;
  }

  liveHappilyEverAfter(wolf)
});


module.exports = {
  Size,
  Species,
  Speed,
  Temperatures,
  Animal, House, Market, Material, Materials,
  FoodVarieties, Food, Door, BuildingBuilder, Quality, UnHuffPuffableException, liveHappilyEverAfter, EventBus, Location
};
