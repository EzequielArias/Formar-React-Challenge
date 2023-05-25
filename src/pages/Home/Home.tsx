import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getAllPokemons } from "../../redux/actionsThunk/pokemon";
import { PokeMap } from "../../interfaces";
import Card from "../../components/Card/Card";
import { PokemonList, HomeContainer } from "./styled-components/Home";
import Navbar from "../../components/Navbar/Navbar";
import { PokemonInterface } from "../../interfaces";
import Loader from "../../components/Loader/Loader";
import { ScrollLoader } from "../../components/Loader/styled-components/Loader";

const Home = () => {
  const pokemonFeature: PokemonInterface = useAppSelector(
    (state) => state.pokemons
  );
  const dispatch = useAppDispatch();
  const [offset, setOffset] = useState<number>(1);
  const [scrollLoader, setScrollLoader] = useState<boolean>(true);

  useEffect(() => {
      console.log(offset)
      dispatch(getAllPokemons(offset));
      setScrollLoader(false);
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.scrollHeight
    ) {
        setScrollLoader(!scrollLoader);
        setOffset((prev) => prev + 16);
    }
  };

  return (
    <HomeContainer>
      {pokemonFeature.isLoad ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <PokemonList>
            {pokemonFeature.pokemons.map((pokemon: PokeMap, index: number) => {
              return (
                <Card
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  weight={pokemon.weight}
                  abilities={pokemon.abilities}
                />
              );
            })}
          </PokemonList>
          {scrollLoader && <ScrollLoader />}
        </>
      )}

    </HomeContainer>
  );
};

export default Home;
