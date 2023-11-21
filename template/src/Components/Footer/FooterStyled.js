import { styled } from "styled-components";

export const Container = styled.section`
  background-color: white;
  color: black;
  border-top: 1px solid black;
  padding: 5%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 450px) {
    padding: 0;
    padding-bottom: 100px;
    border-top: none;
  }
`;

export const Ul = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 450px) {
    padding: 20px;
    gap: 30px;
    margin-top: 0;
    display: ${({ isopen }) => (isopen ? "flex" : "none")};
    overflow: hidden;
    transition: display 1s ease-in-out;
  }

  li {
    button {
      background-color: transparent;
      border: none;
      color: black;
      font-size: 14px;
      cursor: pointer;
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export const Owner = styled.div`
  justify-self: start;
  align-self: center;
  margin-bottom: -70px;
  margin-top: 50px;
  font-size: 12px;
`;

export const Line = styled.div`
  background-color: black;
  width: 100vw;
  height: 1px;
  margin-left: -6vw;

  @media screen and (max-width: 450px) {
    height: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5%;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 0;

    div {
      border-top: 1px solid black;

      h3 {
        padding-left: 20px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;