import styled from 'styled-components'

export const DeleteCross = styled.span `
    position : relative;
    right : 4em;
    bottom : 3.5em;

    @media screen and (max-width: 526px) {

        right : 8em;
        bottom : 3em;
    }
`

export const CardContainer = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    font-family: 'Roboto Mono', monospace;

    border : 2px solid black;
    margin : 1em;
    width : 30%;
    height : 18em;

    display : flex;
    justify-content : center;
    align-items : center;
    flex-wrap : wrap;

    border-radius : 45px;

    background-color : #bee3e4;

    & img {
        height : 150px;
        width : 150px;
    }

    & h2, p ,span {
        margin : 5px
    }


    @media screen and (max-width: 768px) {
        width : 45%;
        
    }


    @media screen and (max-width: 526px) {

        width : 100%;

        & img {
            height : 100px;
            width : 100px;
        }
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