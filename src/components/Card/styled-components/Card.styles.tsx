import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link) `
    text-decoration : none;
    color : black;
    display : flex;
    flex-direction : column;
    @media screen and (max-width: 768px) {
        margin : 0;
    }
`

export const CardContainer = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    font-family: 'Roboto Mono', monospace;

    width : 40%;
    border : 2px solid black;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    margin : 1em;

    border-radius : 45px;

    background-color : #bee3e4;

    & :before {
        content : "",
        height : 150px;
        width : 150px;
        background : conic-gradient(
            #fd004c,
            #f39000,
            #fff020,
            #3edf4b,
            #3363ff,
            #b102b7,
            #fd004c
        );
    };

    & h2, p ,span {
        margin : 5px
    }

    @media screen and (max-width: 526px) {
        width : 95%;
    }
`
export const DeleteCross = styled.span `
  
    & :hover {
        color : red;
    }

    @media screen and (max-width: 526px) {

        right : 6em;
        bottom : 6em;
    }
`

export const CardSection = styled.section `

    width : 100%;
    padding-bottom : 18px;
    text-align : center;
`
export const PokemonCircle = styled.span `
background-color : white;
border-radius : 60px;
margin-top : 0.5em;
display: inline-block;
  text-align: center;
`

export const PokemonImage = styled.img `
    height : 200px;
    width :  200px;


    @media screen and (max-width: 526px) {
        height : 200px;
        width :  200px;
    }
`