import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getAllPokemons } from "../../redux/actionsThunk/pokemon";
import { PokeMap } from "../../interfaces";
import Card from "../../components/Card/Card";
import {
  PokemonList,
  HomeContainer,
  ScrollLoader,
  PokemonNotFound,
  NotFoundContainer,
  N404,
  NotFoundMessage
} from "./styled-components/Home";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader";
import { InfinitySpin } from "react-loader-spinner";
import Pokemon404 from "../../assets/pokeball2.png";

const Home = () => {
  const { pokemonFeature, isSearch } = useAppSelector((state) => {
    return {
      pokemonFeature: state.pokemons,
      isSearch: state.specialRendering.isActive,
    };
  });

  const dispatch = useAppDispatch();
  const [offset, setOffset] = useState<number>(0);
  const [scrollLoader, setScrollLoader] = useState<boolean>(false);

  useEffect(() => {
    console.log(isSearch);
    if (isSearch) return;
    setTimeout(() => {
      dispatch(getAllPokemons(offset));
      setScrollLoader(false);
    }, 1500);
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (isSearch) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.scrollHeight
    ) {
      setScrollLoader(!scrollLoader);
      setOffset((prev) => prev + 16);
    }
  };
  const restart = () => dispatch(getAllPokemons(offset))
  return (
    <HomeContainer>
      {pokemonFeature.isLoad ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <PokemonList>
            {pokemonFeature.pokemons.length > 0 ? (
              pokemonFeature.pokemons.map((pokemon: PokeMap, index: number) => {
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
              })
            ) : (
              <>
              <NotFoundContainer onClick={restart}>
                <N404>4</N404>
                <PokemonNotFound src={Pokemon404} alt="404" />
                <N404>4</N404>
              </NotFoundContainer>
              <NotFoundMessage>No se encontro el pokemon.</NotFoundMessage>
              </>
            )}
          </PokemonList>
          {isSearch ? (
            <></>
          ) : (
            <ScrollLoader
              style={scrollLoader ? { display: "" } : { display: "none" }}
            >
              <InfinitySpin color="#fff" />
            </ScrollLoader>
          )}
        </>
      )}
    </HomeContainer>
  );
};

export default Home;

/**
 * <PokemonList>
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
 */
