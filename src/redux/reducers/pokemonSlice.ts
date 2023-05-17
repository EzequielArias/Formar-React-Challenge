import {  createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../store";
import { getAllPokemons } from "../actionsThunk/pokemon";

interface Pokemon {
    name: string;
    url: string;
  }
  
  interface PokemonInterface {
    pokemons: Pokemon[],
    isLoad : boolean
  }

const initialState : PokemonInterface = {
    pokemons : [],
    isLoad : true
}



export const pokemonSlice = createSlice({
    name : 'pokemon',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {

        builder.addCase(getAllPokemons.pending, (state : PokemonInterface) => {
            state.isLoad = true;
        })

        builder.addCase(getAllPokemons.fulfilled, (state : PokemonInterface, action) => {
            state.isLoad = false
            console.log(action.payload)
            state.pokemons = action.payload
        })

        builder.addCase(getAllPokemons.rejected, (state : PokemonInterface, action) => {
            console.log(action)
            state.isLoad = true
        })
    }
})

export const { } = pokemonSlice.actions;

