import styled, { keyframes } from 'styled-components';

export const NavStyle = styled.nav`
position: fixed;
z-index: 15;
top: 0;
left: 0;
margin: 0;
padding: 0;
ul{
    list-style: none;
    margin: 0;
    flex-direction: column;
    padding: 0;
    background-color:transparent;
    
    height: 70vh;
    color: blue;
z-index: 15;
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
top: 0;
right: 0;
left: 0;
width: 100%;
li,button{
    height: 25px;
    font-size: 16px;
    text-decoration: none;
    color:white;
    background-color: transparent;
    border: transparent;
    background:  no-repeat 0 100%;
    background-image: linear-gradient(currentColor, currentColor);
    background-size: 0% 2px;
    transition: background-size .3s ease;
}
li:hover,button:hover{
    background-size: 100% 2px;
}
li>button>p{
    color:white;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    bottom: 30px;
    left: 40px;
}
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
animation-duration: 0.6s;
animation-timing-function: ease-in-out;
    @keyframes growY {
        0% {transform: translateY(-70vh)}
        100% {transform: translateY(0)}
    }

`

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Women = styled.div`
  background-color: white;
  color: black;
  width: 100vw;
  flex-direction: column;
  /* height: 150px; */
  left: 0;
  top: 0;
  z-index: 13;
  display: flex;
  height: 100vh;
  /* justify-content: center; */
  padding: 40px;
  padding-top: 70px;
  padding-left: 20vw;
  position: fixed;
  .back{
    font-size: 30px;
    position: absolute;
    top: 5px;
    left: 20px;
  }
  animation: ${slideDownAnimation} ${(props) => (props.isOpen ? '0s' : '0.3s')} ease;
  div {
    h5{
        font-size: 18px;
    }
     ul {
       list-style: none;
       padding: 0;
       flex-direction: column;
       gap: 20px;
       
     }
   }
`;

export const Men = styled.div`
  background-color: white;
  color: black;
  width: 100vw;
  flex-direction: column;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 13;
  display: flex;
  padding: 40px;
  padding-top: 70px;
  padding-left: 20vw;
  position: fixed;
  .back{
    font-size: 30px;
    position: absolute;
    top: 5px;
    left: 20px;
  }
  animation: ${slideDownAnimation} ${(props) => (props.isOpen ? '0s' : '0.3s')} ease;
  div {
    h5{
        font-size: 18px;
    }
     ul {
       list-style: none;
       padding: 0;
       flex-direction: column;
       gap: 20px;
     }
   }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${({ isOpen2 }) => (isOpen2 ? 1 : 0)};
  height: ${({ isOpen2 }) => (isOpen2 ? 'auto' : 0)};
  overflow: hidden;
  transition: opacity 0.5s ease, height 0.5s ease;
`;

export const Line = styled.div`
width: 100vw;
background-color: gray;
height: 1px;
position: fixed;
top: 60px;
left: 0;
`

export const Button = styled.button`
font-weight: 800;
text-transform: uppercase;
`

export const NavMobile = styled.nav`
background-color: transparent;
z-index: 15;
display: flex;
justify-content: space-around;
align-items: center;
height: 60px;
position: fixed;
top: 0;
right: 0;
left: 0;
width: 100vw;
li,button{
    height: 25px;
    font-size: 16px;
    text-decoration: none;
    color:white;
    background-color: transparent;
    border: transparent;
    color: black;
}
@media screen and (min-device-width : 701px) {
    display:none;
}
`

export const Div = styled.div`
z-index: 10;
    display: flex;
    div{
    z-index: 10;
    display: flex;
      width: 100vw;
      height: 700px;
      overflow: hidden;
      justify-content: center;
    }
    :nth-child(1){
        @media screen and (min-device-width : 280px) and (max-device-width : 700px) {
            width: 0;
        }
    }
    :nth-child(2){
        @media screen and (min-device-width : 280px) and (max-device-width : 700px) {
            width: fit-content;
            height: 45rem;
        }
    }
`

export const Img = styled.img`
   width: 100%;
    height: fit-content;
    min-height: 900px;
    min-width: 700px;
    position: relative;
    top: 0;
`
export const Img2 = styled.img`
    width: 100%;
    height: fit-content;
    min-height: 900px;
    min-width: 700px;
    position: relative;
    bottom: 40px;
`
export const NavBackground = styled.div`
z-index: 11;
    width: 100vw;
    height: 60px;
    background-color: white;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
`

export const NavBackground2 = styled.div`
z-index: 80;
    width: 100vw;
    height: 60px;
    background-color: red;
`