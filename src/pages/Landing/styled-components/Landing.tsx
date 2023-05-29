import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LandingContainer = styled.div `
    height : 100vh;
    display : flex;
`
export const LandingSection = styled.section `
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;

    @media screen and (max-width: 768px) {
        width : 50%;
    }
`

export const PokeImg = styled.img `
    height : 28em;
    width : 50%;;
`

export const PokemonSlogan = styled.h2 `
@import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Montserrat:ital,wght@1,100&family=Oswald&display=swap');
    font-family: 'Oswald', sans-serif;    color : black;
    width : 90%;
    margin-bottom : 15px;
    @media screen and (max-width: 768px){
        font-size : 1em;
    }
`

export const ContinueBtn = styled(Link) `
    text-decoration : none;
    padding : 1em;
    color : black;
    font-weight : 700;
    background-color : orange;
    border-radius : 15%;

    &:hover{
        transform: scale(1.1);
        background-color : purple;
    }
`