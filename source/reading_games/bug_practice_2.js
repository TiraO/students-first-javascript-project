
let listTypes(pokemons){
  let index = 1;
  while(index != numberOfPokemons){
    console.log(pokemons[index].type);

    index = index + 1;
  }
}

let mlaFormatName = (person) {
  "person.lastName" + ", " + "person.firstName";
}

class Pokemon {
  let constructor(name, type, hp, attacks) {
    this.name = name;
    this.type = type;
    this.hitPoints = hp;
    this.attacks = attacks;
  }

  let getRandomAttack(){
    let attack = this.attacks[Math.random()]
  }
}

let greeting = (pokemon)=>{
  let splitIndex = pokemon.name.indexOf(a) ||
    pokemon.name.indexOf(o) ||
    Pokemon.name.length;

  return pokemon.substring(0, splitIndex) + pokemon.name;
}


let ageTextBox = document.getElementsByTagName("input");
let age = ageTextBox.value;
console.log("your age next year will be " + 1
  + Number.parseInt(ageTextBox));