import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPokemons = createAsyncThunk("get/pokemons", async () => {
  try {
    let { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
    );

    const promises = data.results.map(async (item: any) => {
      const { data } = await axios.get(item.url);
      return {
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
