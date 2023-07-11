import {styled} from "styled-components";

export const NavStyle = styled.nav`
background-color: transparent;
z-index: 15;
display: flex;
justify-content: space-around;
align-items: center;
height: 70vh;
position: fixed;
top: 0;
right: 0;
left: 0;
width: 100vw;
flex-direction: column;

a,button{
    height: 25px;
    font-size: 16px;
    text-decoration: none;
    color:white;
    background-color: transparent;
    border: transparent;
}
p{
    color:white;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    bottom: 30px;
    left: 40px;
}
.x{
    font-size: 3rem;
    rotate: 45deg;
    background-color: transparent;
    border: transparent;
    color: white;
    position: absolute;
    top: 5%;
    right: 5%;
}
`

export const Filter = styled.div`
position: relative;
    bottom: 60px;
    height: 60px;
`
export const Background = styled.section`
z-index: 30;
position: fixed;
top: 0;
right: 0;
background: #000000df;
width: 100%;
height: 70vh;
animation-name: growY;
animation-duration: 0.6s linear infinite;;
animation-timing-function: ease-in-out;
    @keyframes growY {
        0% {transform: translateY(-70vh)}
        100% {transform: translateY(0)}
    }

`