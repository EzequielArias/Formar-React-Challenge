import {  createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../store";
import { getAllPokemons } from "../actionsThunk/pokemon";
import { PokeMap } from "../../interfaces";


  
  interface PokemonInterface {
    pokemons: PokeMap[],
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

        builder.addCase(getAllPokemons.pending, (state ) => {
            state.isLoad = true;
        })

        builder.addCase(getAllPokemons.fulfilled, (state , action) => {
            state.isLoad = false
            state.pokemons = action.payload
        })

        builder.addCase(getAllPokemons.rejected, (state , action) => {
            console.log(action)
            state.isLoad = true
        })
    }
})

export const { } = pokemonSlice.actions;

