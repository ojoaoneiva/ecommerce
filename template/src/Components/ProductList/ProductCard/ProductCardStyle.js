import { styled } from "styled-components";

export const Product = styled.figure`
  .slick-prev,
  .slick-next {
    display: none !important;
  }
  width: 25%;
  height: fit-content;
  margin: 0;
  padding: -10px;
  opacity: 0;
  transition: opacity 2s ease;
  @media screen and (max-width : 1000px) {
    width: 50%;
  }
  .image-container {
    cursor: grab;
    overflow: hidden;
    background-color: white;
    .slider{
     margin-bottom: -4px;
    }

    &:hover {
      .text,
      .prevButton,
      .nextButton {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
    &:active {
      cursor: grabbing;
    }
    margin: -3px;
    margin-top: 2px;
    width: 100%;
    position: relative;
    border: 1px solid black;

    .nextButton {
      left: 5%;
    }
    .prevButton {
      right: 5%;
    }
    .prevButton,
    .nextButton {
      top: 50%;
      position: absolute;
      opacity: 0;
      border: none;
      cursor: pointer;
      font-size: 18px;
      background-color: transparent;
    }
  }

  &.visible {
    opacity: 1;
  }
`;

export const Div = styled.figcaption`
@media screen and (max-width : 1000px) {
    opacity: 1;
    position: relative;
    min-height: 40px;
    p{
      display: none;
    }
    div{
    display: flex;
    flex-direction: column;
  }
  }
    position: absolute;
  bottom: 0;
  left: 5%;
  width: 90%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  div{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  margin-bottom: 1vw;
  gap: 0;
  h4,
  p {
    margin: 0;
  }
  button {
    width: 60%;
    height: 30px;
    align-self: center;
    background-color: transparent;
    color: transparent;
    border: 0;
  }
  .text:hover {
    button {
      background-color: black;
      color: white;
    }
  }
`;

export const Edit = styled.div`
  z-index: 10;
  position: absolute;
  top: -24vw;
  opacity: 1;
  @media screen and (max-width : 500px){
    top: -54vw;
}
  button{
    z-index: 80;
     border: 1px solid black;
     background-color: transparent;
     color: black;
     cursor: pointer;
     &:hover{
      background-color: black;
      color: white;
     }
  }
  .delete{
    width: 5vw;
    @media screen and (max-width : 500px){
      width: 70px;
}
  }
  .edit{
    width: 5vw;
    @media screen and (max-width : 500px){
      width: 70px;
}
  }
 
`;