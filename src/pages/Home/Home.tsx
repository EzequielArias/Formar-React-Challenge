import { useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getAllPokemons, getAllAbilities } from '../../redux/actionsThunk/pokemon';
import { PokeMap } from '../../interfaces';
import Card from '../../components/Card/Card';
import { PokemonList, HomeContainer } from './styled-components/Home';
import Navbar from '../../components/Navbar/Navbar';
import { PokemonInterface } from '../../interfaces';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const pokemonFeature : PokemonInterface  = useAppSelector((state) => state.pokemons);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getAllPokemons())
      dispatch(getAllAbilities())
    }, []);
  
  
    return (
      <HomeContainer>
        {pokemonFeature.isLoad  ? (
          <Loader/>
        ) : (
          <> 
            <Navbar/>
            <PokemonList>
            {
              pokemonFeature.pokemons.map((pokemon : PokeMap, index : number) => {

                return (
                  <Card
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  weight={pokemon.weight}
                  abilities={pokemon.abilities}
                  />
                )
              })
            }
          </PokemonList>
          </>
        )}
  
      </HomeContainer>
    );
}

export default Home