export interface PokeMap {
    name : string,
    abilities : String[],
    image : string,
    weight : number[]
}

export interface PokemonInterface {
  pokemons: PokeMap[],
  abilities : String[],
  isLoad : boolean,
  pokemonToDump : string[]
}