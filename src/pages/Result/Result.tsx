import React from "react";
import { HomeContainer, PokemonList } from "../Home/styled-components/Home";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import { PokeMap } from "../../interfaces";
import Card from "../../components/Card/Card";
import { useAppSelector } from "../../redux/hooks";

const Result = () => {
  const pokemonFeature = useAppSelector((state) => state.pokemons);

  return (
    <>
      <HomeContainer>
        {pokemonFeature.isLoad ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <PokemonList>
              {pokemonFeature.pokemons.map(
                (pokemon: PokeMap, index: number) => {
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
                }
              )}
            </PokemonList>
          </>
        )}
      </HomeContainer>
    </>
  );
};

export default Result;
