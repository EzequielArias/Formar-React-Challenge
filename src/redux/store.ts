import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './reducers/pokemonSlice'
import { specialRendering } from './reducers/specialRendering'
// ...

export const store = configureStore({
  reducer: {
    pokemons : pokemonSlice.reducer,
    specialRendering : specialRendering.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch