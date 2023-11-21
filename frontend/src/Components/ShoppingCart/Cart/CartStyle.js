import { styled } from "styled-components"

export const CartStyle = styled.div`
    z-index: 30;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    min-height: 600px;
    width: 30vw;
    min-width: 400px;
    animation-name: growX;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    @keyframes growX {
        0% {transform: translateX(30vw)}
        100% {transform: translateX(0)}
    }
    @media screen and (min-device-width : 280px) and (max-device-width : 700px){
            width: 90%;
            padding: 5%;
            min-width: 200px;
            @keyframes growX {
                0% {transform: translateX(100vw)}
                100% {transform: translateX(0)}
            }
    }
`

export const Div1 = styled.div`
width: 100%;
margin-bottom: 20px;
display: flex;
h2{
    font-size: 16px;
    font-weight: normal;
}
    button:first-child{
        font-size: 30px;
        position: fixed;
        border: transparent;
        rotate: 45deg;
        top: 20px;
        right: 20px;
        background-color: transparent;
        width: 50px;
        height: 50px;
        animation-name: rotateX1;
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
    @keyframes rotateX1 {
        0% {transform: rotate(0)}
        100% {transform: rotate(90deg)}
    }
    }
    button:first-child:hover{
        animation-name: rotateX2;
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
    @keyframes rotateX2 {
        0% {transform: rotate(90deg)}
        100% {transform: rotate(0)}
    } }
`

export const Div2 = styled.div`
height: 55vh;
margin-bottom: 10px;
display: flex;
flex-direction: column;
overflow-y: auto;
`

export const Div3 = styled.div`
width: 90%;
border-top: 1px solid rgb(179, 179, 179);;
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;
bottom: 80px;
right: 20px;
button:first-child{
    height: 50px;
    width: 50%;
}
button:nth-child(2){
    height: 50px;
    width: 50%;
    background-color: black;
    color: white;
}
`

export const Background = styled.section`
z-index: 30;
position: fixed;
top: 0;
right: 0;
background: #00000083;
width: 100%;
height: 100%;
`