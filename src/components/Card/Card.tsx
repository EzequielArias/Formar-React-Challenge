import {
  CardContainer,
  CardSection,
  PokemonCircle,
} from "./styled-components/Card.styles";
import { PokeMap } from "../../interfaces";

// https://pokeapi.co/api/v2/egg-group/:id a que categoria de pokemon pertenece cada pokemon

const Card = ({ name, image, abilities, weight }: PokeMap) => {
  return (
    <CardContainer>
      <PokemonCircle>
        <img src={image} alt="" />
      </PokemonCircle>
      <CardSection>
        <h2>{name}</h2>
        <p>
          Habilidades: {abilities.map((a) => `${a.charAt(0).toUpperCase() + a.slice(1)} `)}
        </p>
        <span>Peso: {weight}</span>
      </CardSection>
    </CardContainer>
  );
};

export default Card;
