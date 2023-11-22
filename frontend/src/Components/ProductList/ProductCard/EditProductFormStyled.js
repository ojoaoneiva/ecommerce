import { styled } from "styled-components";

export const Background = styled.div`
  background-color: ${({ overlay }) => (overlay ? "rgba(0, 0, 0, 0.5)" : "transparent")};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const Div = styled.div`
    display: flex;
    /* flex-direction: column; */
    /* p{
      margin-bottom: -30px;
    } */
`

export const Container = styled.form`
  background-color: white;
  padding: 20px;
  z-index: 90;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  position: fixed;
  pointer-events: auto;
  @media screen and (max-width : 900px){
    width: 70%;
}
  div {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      @media screen and (max-width : 500px){
          flex-direction: column;
          gap: 5px;
}
      label {
        margin-right: 5vw;
        @media screen and (max-width : 500px){
          margin-right: 0;
}
      }
    }
    .buttonscontainer {
      display: flex;
      flex-direction: column;
      button {
        background-color: transparent;
        border: 1px solid black;
        padding: 10px;
        width: 100%;
        margin-top: 20px;
        &:hover{
          cursor: pointer;
          background-color: black;
          color: white;
        }
        @media screen and (max-width : 500px){
    width: 70%;
}
      }
    }
  }
  border: none;
`;