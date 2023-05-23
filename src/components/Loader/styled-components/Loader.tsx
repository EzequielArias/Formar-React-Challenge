import styled from 'styled-components'

export const LitleContainer = styled.div `
display : flex`

export const LoaderContainer = styled.div `
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;

background-color : #0a7281;
height : 100vh;
`

export const Pokeball = styled.img `
    height : 200px;
    width : 200px;

    animation: tilt-shaking 2s infinite;

    @keyframes tilt-shaking {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(0eg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }
`

export const Loading = styled.h3 `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Mono:wght@300&display=swap');
font-family: 'Bebas Neue', sans-serif;
color : white;
font-size : 2em;
position : sticky;
`

export const DotLoading = styled.p `
    color : white;
    font-size : 2em;
    width : 10vh;
    white-space: nowrap;
    width: 5ch;
    overflow:hidden;
    animation: typing 5s steps(5) , blink 1s infinite step-end alternate;
    position : absolute;
    left : 23em;

    @keyframes typing {
        from { width: 0;}
    }
    
    @keyframes blink{
        50% { border-color: transparent;}
    }`