import { Styled, styled } from "styled-components"

export const FinishMessage = styled.div`
z-index: 30;
background-color: white;
position: fixed;
top: 25vh;
right: 30vw;
width: 600px;
height: 300px;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
padding: 0 80px;
button{
    margin-top: 50px;
    height: 40px;
    width: 30%;
    background-color: black;
    color: white;
}
@media screen and (min-device-width : 280px) and (max-device-width : 700px) {
    width: 80%;
    height: 70%;
    position: fixed;
    top: 15%;
    right: 10%;
    padding: 0 10%;
}
`
export const Background = styled.section`
z-index: 30;
position: fixed;
top: 0;
right: 0;
background: #00000083;
width: 100vw;
height: 100%;
`