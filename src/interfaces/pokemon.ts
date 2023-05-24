export interface PokeMap {
    id : number,
    name : string,
    abilities : String[],
    image : string,
    weight : number[]
}

export interface PokemonInterface {
  pokemons: PokeMap[],
  abilities : String[],
  isLoad : boolean,
  pokemonToDump : string[],
  pokemonDetail : any
}