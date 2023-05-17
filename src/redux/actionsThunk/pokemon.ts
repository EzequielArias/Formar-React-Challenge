import axios from "axios";
import { createAsyncThunk} from '@reduxjs/toolkit'

export const getAllPokemons = createAsyncThunk('get/pokemons', async () => {
    try {

        let { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

        const promises = data.results.map(async (item : any) => {
            const {data} = await axios.get(item.url)
            return data
        })

        const result = await Promise.all(promises)

        return result
    } catch (error : any) {
        throw new Error(error.message)
    }
})