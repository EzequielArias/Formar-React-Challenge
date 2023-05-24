import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link) `
    text-decoration : none;
    color : black;
    margin : 1em;
    width : 45%;
    display: flex;
    align-items : center;
    justify-content : center;
    @media screen and (max-width: 768px) {
        margin : 0;
    }
`
export const DeleteCross = styled.span `
    position : relative;
    right : 4em;
    bottom : 3.5em;

    @media screen and (max-width: 526px) {

        right : 6em;
        bottom : 6em;
    }
`
export const CardContainer = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    font-family: 'Roboto Mono', monospace;

    border : 2px solid black;
   
    width : 80%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-wrap : wrap;

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
export const CardSection = styled.section `

    width : 100%;
    padding-bottom : 18px;
    text-align : center;
`
export const PokemonCircle = styled.span `
background-color : white;
border-radius : 60px;
margin-top : 0.5em;
`

export const PokemonImage = styled.img `
    height : 200px;
    width :  200px;


    @media screen and (max-width: 526px) {
        height : 200px;
        width :  200px;
    }
`