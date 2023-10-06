import { styled } from "styled-components";

export const Produto = styled.figure`
  width: fit-content;
  height: fit-content;
  &:hover {
    button {
      background-color: black;
      color: white;
    }
    figcaption {
      transform: scale(1.05);
      border: 1px solid grey;
      margin-top: 5.8px
    }
    img {
      transform: scale(1.05);
      border: 1px solid grey;
    }
  }
  img {
    height: 350px;
    width: 288px;
    background-color: #e8e8e8;
  }
`;

export const Div = styled.figcaption`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  line-height: 30px;
  button {
    width: 60%;
    height: 30px;
    align-self: center;
    background-color: transparent;
    color: transparent;
    border: 0;
  }
`;
