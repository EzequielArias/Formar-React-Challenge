import styled from "styled-components";
import pixelGrass from "../../../assets/grass.jpg";

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HomeContainer = styled.div`
  background-image: url(${pixelGrass});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
