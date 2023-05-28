import { createSlice } from "@reduxjs/toolkit";
import { IsSearch } from "../../interfaces/specialRendering";

const initialState : IsSearch = {
    isActive : false 
}

export const specialRendering = createSlice({
    name : "special_render",
    initialState,
    reducers : {
        isSearchActive : (state) => {
            state.isActive = true
        },
        isSearchDown : (state) => {
            state.isActive = false
        }
    }
})

export const { isSearchActive, isSearchDown } = specialRendering.actions;