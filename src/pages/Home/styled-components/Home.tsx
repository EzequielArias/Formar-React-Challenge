import styled from "styled-components";

export const PokemonList = styled.div`
  display: flex;
  align-items : center;
  justify-content : center;
  flex-wrap: wrap;
`;

export const HomeContainer = styled.div`
background-color : #0a7281;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ScrollLoader = styled.span `
  display : flex;
  align-items : center;
  justify-content : center;
`

export const PokemonNotFound = styled.img `
height : 7em;
`

export const NotFoundContainer = styled.div `
  @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Montserrat:ital,wght@1,100&display=swap');
  height : 60vh;
  width : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
`

export const N404 = styled.span `
  color : black;
  font-size : 7em;
  font-family: 'Cherry Bomb One';
  font-weight : 900;
`

export const NotFoundMessage = styled.h5 `
color : black;
height : 25vh;
font-size : 3em;
@import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Montserrat:ital,wght@1,100&display=swap');
font-family: 'Cherry Bomb One';
text-align : center;
`