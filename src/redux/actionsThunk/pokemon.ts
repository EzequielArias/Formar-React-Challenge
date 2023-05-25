import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokeDetail } from "../../interfaces";

export const getClickedPokemon = createAsyncThunk("getClicked/pokemon", async (pokemon : number) : Promise<PokeDetail> => {
  try {
    let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const poke = {
      name: data.name,
      images: [
        data.sprites.front_default,
        data.sprites.front_female,
        data.sprites.front_shiny_female,
        data.sprites.back_female,
        data.sprites.back_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny
        ],
      weight: data.weight,
      abilities: data.abilities.map((item: any) => {
        return `${item.ability.name}`;
      }),
      height : data.height,
      type : data.types[0].type.name
    };

    return poke
  
  } catch (error : any) {
    throw new Error(error.message)
  }
})

export const getAllPokemons = createAsyncThunk("get/pokemons", async (value : number) => {
  console.log(value)
  try {
    let { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${value}&limit=25`
    );

    const promises = data.results.map(async (item: any) => {
      const { data } = await axios.get(item.url);
      return {
        id : data.id,
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight,
        abilities: data.abilities.map((item: any) => {
          return `${item.ability.name}`;
        }),
      };
    });

    const result = await Promise.all(promises);

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

export const searchByInput = createAsyncThunk("get/pokemon/search", async (string : string) => {

  try {

    let { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1270")
    
    let result = data.results.filter(
      (pokemon: { name: string; url: string }) => {
        if (pokemon.name.includes(string)) {
          return pokemon;
        }
      }
    );

    let pokemons = result.map(async (item: any) => {
      const { data } = await axios.get(item.url);
      return {
        id : data.id,
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight,
        abilities: data.abilities.map((item: any) => {
          return `${item.ability.name}`;
        }),
      };
    });
  
    //const res = await Promise.all(result)
    const searchResult = await Promise.all(pokemons)

    console.log(searchResult)

    return searchResult
  } catch (error : any) {
    throw new Error(error.message)
  }
})

export const getAllAbilities = createAsyncThunk("get/abilities", async () => {
  try {
    let { data } = await axios.get("https://pokeapi-12.fly.dev/");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});
