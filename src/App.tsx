import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { getAllPokemons } from "./redux/actionsThunk/pokemon";

function App() {
  const bringData = useAppSelector((state) => state.pokemons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <>
      {bringData.pokemons.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          {
            bringData.pokemons.map((pokemon) => {
              return (
                <img src={pokemon.url} alt='' key={pokemon.name}></img>
              );
            })
          }
        </div>
      )}

    </>
  );
}

export default App;
