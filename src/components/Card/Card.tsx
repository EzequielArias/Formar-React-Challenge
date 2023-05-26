import {
  CardContainer,
  CardSection,
  PokemonCircle,
  DeleteCross,
  StyledLink,
  PokemonImage,
} from "./styled-components/Card.styles";
import { PokeMap } from "../../interfaces";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import {
  pokemonDumpStorage,
  revertPokemon,
} from "../../redux/reducers/pokemonSlice";
import { useAppDispatch } from "../../redux/hooks";

// https://pokeapi.co/api/v2/egg-group/:id a que categoria de pokemon pertenece cada pokemon

const Card = ({ name, image, abilities, weight, id }: PokeMap) => {
  const [show, setShow] = useState(true);
  const dispatch = useAppDispatch();

  const deletePOkemon = (e: any) => {
    if (show) {
      setShow(!show);
      dispatch(pokemonDumpStorage(name));
    } else {
      setShow(!show);
      dispatch(revertPokemon(name));
    }
  };

  return (
    <>
      <CardContainer>
        <DeleteCross onClick={deletePOkemon}>
          <ImCross style={show ? { color: "black" } : { color: "red" }} />
        </DeleteCross>
        <StyledLink to={`/Detail/${id}`}>
          <PokemonCircle>
            <PokemonImage src={image} alt="" />
          </PokemonCircle>
          <CardSection>
            <h2>{name}</h2>
            <p>
              Habilidades:{" "}
              {abilities.map(
                (a) => `${a.charAt(0).toUpperCase() + a.slice(1)} `
              )}
            </p>
            <span>Peso: {weight}Kg</span>
          </CardSection>
        </StyledLink>
      </CardContainer>
    </>
  );
};

export default Card;
