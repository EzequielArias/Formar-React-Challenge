import styled from 'styled-components'

export const DetailContainer = styled.div `
    width : 100%;
    height : 85vh;
    display : flex;


    @media screen and (max-width: 768px) {
       flex-direction : column;
      }
`

export const DetailPoke = styled.div `
    height : 100%;
    width : 50%;
    background-color : #343434;
    text-align : center;

    @media screen and (max-width: 768px) {
        width :100%;
    }
`

export const Pokemon_IMG = styled.img `
    height : 25em;
`
export const LeftArrow = styled.span `
    height : 100%;
    font-size : 50px;
    color : black;

    & :hover {
        color : grey;
    }
    `
export const RightArrow = styled.span`
    font-size : 50px;
    color : black;

    & :hover {
        color : grey;
    }
`

// DETAIL POKEMON

export const DetailStats = styled.div `
width : 50%;
background-color : #242424;
display : flex;
flex-direction : column;

align-items : center;
justify-content : center;

font-family: 'Montserrat', sans-serif;
color : white;

@media screen and (max-width: 768px) {
    padding-top : 10px;
    width :100%;
}
`

export const PokemonName = styled.h2 `
border-top : 1px inset white;
border-bottom : 1px inset white;

font-size : 4em;
margin-bottom : 10px;
`

export const PokemonStats = styled.p `
    font-size : 1.3em;
`

export const PokemonType = styled.h4 `
font-size : 2em;
margin-bottom : 10px;

`