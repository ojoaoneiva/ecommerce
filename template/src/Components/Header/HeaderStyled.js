import {styled} from "styled-components";

export const NavStyle = styled.nav`
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
a,button{
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
a:hover,button:hover{
    background-size: 100% 2px;
}
p{
    color:white;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    bottom: 30px;
    left: 40px;
}

`
export const Div = styled.div`
z-index: 10;
    display: flex;
    /* margin-top: 20px; */
    div{
      width: 50vw;
      height: 700px;
      overflow: hidden;
      justify-content: center;
    }
`
export const Img = styled.img`
    width: fit-content;
    height: 100%;
    
    
`
export const Img2 = styled.img`
    width: 100%;
    height: fit-content;
    
`
export const NavBackground = styled.div`
z-index: 5;
    width: 100vw;
    height: 60px;
    background-color: rgb(134, 107, 73);;
    position: fixed;
    top: 0;
    
`
export const Filter = styled.div`
position: relative;
    bottom: 60px;
    height: 60px;
`
