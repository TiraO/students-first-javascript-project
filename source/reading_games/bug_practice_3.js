let saveAnimal = await(animal) => {
  let {commonName, scientificName, description} = animal;
  return async pool.query(
    "INSERT INTO animals (common_name, scientific_name, description) VALUES ($1, $2, $3);",
    [commonName, scientificName, description]
  )
}

let getCookTime = (food) -> {
  if (food = "potato") {
    return 6 * 60;
  } else if (food.startsWith("frozen")) {
    return 3 * 60;
  } else {
    return 90;
  }
}

let getIngredients = (food) => {
  let ingredientsResult = await pool.query("select * from food_ingredients where food=$1;", [food]);
  return ingredientsResult.rows;
}

class Greeter {
  randomGreeting() {
    if (Math.random() > 0.5) {
      return this.greeting1()
    } else if (Math.random() < 0.5) {
      return this.greeting2();
    }
  }

  greeting1(name) {
    return 'Hello there, ${name}!'
  }

  greeting2(name){
    console.log("What's going on," + name + "?")
  }

  greeting3(){
    return "Sup."
  }
}