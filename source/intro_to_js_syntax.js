let x;
x = 0;

console.log(x);

x = x + 1;

let max = (first, second)=> {
  if(first > second){
    return first;
  } else {
    return second;
  }
};
console.log("max", max(x, 10));
console.log("max", max(x, -10));

let pokemonNames = ["pikachu", "squirtle"];
pokemonNames.push("charmander");

console.log(pokemonNames);

let pikachu = {
  species: "pikachu",
  type: "electric",
  color: "yellow",
  health: 5,
  attack: 7
};
let charmander = {
  species: "charmander",
  type: "fire",
  color: "orange",
  health: 15,
  attack: 7
}

let pokemons = [];

pokemons.push(pikachu);
console.log(pokemons);

pokemons.push(charmander);
console.log(pokemons);

console.log(pokemons[0].type);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let numberOfPokemons = pokemons.length;
let index = 0;
while(index != numberOfPokemons){
  console.log(pokemons[index].type);

  index = index + 1;
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let getPokemonTypes = (pokemons)=>{
  let numberOfPokemons = pokemons.length;
  let result = [];

  let index = 0;
  while(index != numberOfPokemons){
    result.push(pokemons[index].type);
    index = index + 1;
  }
  return result;
}

console.log("the pokemon types");
console.log(getPokemonTypes(pokemons));