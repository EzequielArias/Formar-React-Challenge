import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPokemons = createAsyncThunk("get/pokemons", async () => {
  try {
    let { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
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
    console.log(result);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
});
