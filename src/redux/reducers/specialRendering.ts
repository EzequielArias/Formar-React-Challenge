import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IsSearch } from "../../interfaces/specialRendering";

const initialState : IsSearch = {
    isActive : false 
}

export const specialRendering = createSlice({
    name : "special_render",
    initialState,
    reducers : {
        isSearchActive : (state , action : PayloadAction<any>) => {
            state.isActive = !state.isActive
        }
    }
})

export const { isSearchActive } = specialRendering.actions;