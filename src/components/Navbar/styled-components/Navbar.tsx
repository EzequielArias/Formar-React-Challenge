import styled from 'styled-components'


export const Navigation = styled.header `
background-color : orange;
height : 15vh;

display : flex;
align-items : center;
justify-content : center;

@media screen and (max-width: 768px) {

}

`
export const DumpPokemons = styled.span `
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');


    background-color : orange;
    padding : 0.4em;
    border : 1px solid black;
    font-family: 'Roboto Mono', monospace;

    & :hover, :focus {
      animation: pulse 1s;
      box-shadow: 0 0 0 2em rgba(#fff,0);
    }

    
`

export const DumpContainer = styled.div `
text-align: center;
margin-top : 1em;
`

export const BarsContainter = styled.div `
    display : none;

    @media screen and (max-width: 768px) {

    }
`

export const SearchInput = styled.input.attrs({placeholder : "Buscar Pokemon"}) `
    margin : 1em;
    background-color : skyblue;
    border-radius : 45px;
    padding : 1em;
    font-size : 1em;
    border : 1px solid black;

    & :placeholder {
        font-size: 2em;
      }
      @media screen and (max-width: 768px) {
        padding : 10px;
    font-size : 10px;
      }
`

export const AbilitiesInput = styled.input.attrs({placeholder : 'Buscar por Habilidad'}) `
margin : 1em;
background-color : skyblue;
border-radius : 45px;
padding : 1em;
font-size : 1em;
border : 1px solid black;

@media screen and (max-width: 768px) {
    padding : 10px;
    font-size : 10px;
  }
`
export const LogoContainer = styled.a `
    width : 50%;
    font-size : 2.5em;
`

export const Img = styled.img `
height : 50px;
width : 50px;
`