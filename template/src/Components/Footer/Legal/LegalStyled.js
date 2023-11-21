import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 700px;
z-index: 13;
background-color: white;
display: flex;
gap: 20vw;
@media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 0;
    min-height: 0;
  }
h4{
padding: 40px;
padding-top: 100px;
padding-bottom: 0;
@media screen and (max-width: 450px) {
      padding-left: 40px;  
      padding-top: 20px;
      margin:0;
  }
}
`

export const Text = styled.div`
@media screen and (max-width: 450px) {
    width: 80vw;
    padding-bottom: 50px;
  }
padding: 40px;
width: 35vw;
padding-bottom: 150px;
h5{
    font-weight: normal;
    font-size: 14px;
}
p{
    color: rgb(161, 161, 161);
    font-size: 14px;
}
div{
    width: 35vw;
    height: 1px;
    background-color: gray;
    @media screen and (max-width: 450px) {
    width: 80vw;
  }
}
`

export const HeaderBackground = styled.div`
width: 100%;
height: 60px;
position: fixed;
top: 0;
z-index: 5;
background-color: white;
`