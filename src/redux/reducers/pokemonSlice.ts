import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getAllAbilities,
  getAllPokemons,
  searchByInput,
  getClickedPokemon
} from "../actionsThunk/pokemon";
import { PokemonInterface, PokeMap } from "../../interfaces";

const initialState: PokemonInterface = {
  pokemons: [],
  abilities: [],
  isLoad: true,
  pokemonToDump: [],
  pokemonDetail : {}
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    filterAbilities: (state, action: PayloadAction<String>) => {
      if (action.payload.length === 0) {
        state = state;
        return;
      }

      let res = state.pokemons.filter((skill: PokeMap) => {
        if (skill.abilities.includes(action.payload)) {
          return skill;
        }
      });

      state.pokemons = res;
    },

    pokemonDumpStorage: (state, action: PayloadAction<string>) => {
      state.pokemonToDump = [...state.pokemonToDump, action.payload];
    },

    revertPokemon : (state, action : PayloadAction<string>) => {
      state.pokemonToDump = state.pokemonToDump.filter((poke : any) => poke !== action.payload)
    },

    removePokemons : (state) => {
      let cleanData = state.pokemons.filter((poke : PokeMap) => {
        if(!state.pokemonToDump.includes(poke.name)){
          return poke
        }
      })

      state.pokemons = cleanData
      state.pokemonToDump = []
    }
  },

  extraReducers: (builder) => {
    // Get all pokemons
    builder.addCase(getAllPokemons.pending, (state) => {
      if(state.pokemons.length === 0){
        state.isLoad = true;
      }
    });

    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
       state.isLoad = false;
       state.pokemons =  [...state.pokemons, ...action.payload]
       
    });

    builder.addCase(getAllPokemons.rejected, (state) => {
      state.isLoad = true;
    });

    // Get all Abilities
    builder.addCase(getAllAbilities.fulfilled, (state, action) => {
      state.abilities = action.payload;
    });

    // Search pokemons
    builder.addCase(searchByInput.pending, (state, action) => {
      state.isLoad = true
    });

    builder.addCase(searchByInput.fulfilled, (state, action) => {
            state.pokemons = [...action.payload]
            state.isLoad = false;
    });

    builder.addCase(searchByInput.rejected, (state, action) => {
      console.log("Error searchInput reject");
    });

    // Get detailed pokemon
    
    builder.addCase(getClickedPokemon.pending, (state, action) => {
      console.log('Pending getCLicked pokemon')
    })

    builder.addCase(getClickedPokemon.fulfilled, (state, action ) => {
      state.pokemonDetail = action.payload
    })

    builder.addCase(getClickedPokemon.rejected, (state, action) => {
      console.log('Something goes wrong')
    })
  },
});

export const { filterAbilities, pokemonDumpStorage, removePokemons,revertPokemon } = pokemonSlice.actions;
