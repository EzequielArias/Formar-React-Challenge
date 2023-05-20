import { useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getAllPokemons } from '../../redux/actionsThunk/pokemon';
import { PokeMap } from '../../interfaces';
import Card from '../../components/Card/Card';
import { PokemonList } from './styled-components/Home';

const Home = () => {
    const bringData = useAppSelector((state) => state.pokemons);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(getAllPokemons());
    }, []);
  
  
    return (
      <div>
        {bringData.pokemons.length === 0 ? (
          <h1>Cargando...</h1>
        ) : (
            <PokemonList>
            {
              bringData.pokemons.map((pokemon : PokeMap, index : number) => {

                return (
                  <Card
                  key={index}
                  name={pokemon.name}
                  image={pokemon.image}
                  weight={pokemon.weight}
                  abilities={pokemon.abilities}
                  />
                )
              })
            }
          </PokemonList>
        )}
  
      </div>
    );
}

export default Home