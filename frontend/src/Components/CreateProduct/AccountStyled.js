import { styled } from "styled-components";

export const Container = styled.div`
  z-index: 100;
  margin: 50px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h2, p {
    margin: 0;
  }

  img {
    width: 90px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .changePage {
    width: fit-content;
    border: none;
    font-size: 14px;
    text-transform: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }

  .submit {
    background-color: transparent;
    border: 1px solid black;
    padding: 16px;
    text-transform: uppercase;
    width: 30vw;
    margin-top: 40px;
    cursor: pointer;

    @media screen and (max-width: 450px) {
      width: 70vw;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  @media screen and (max-width: 450px) {
    div {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: start;
    }
  }

  input {
    width: 30vw;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    padding-left: 0;

    @media screen and (max-width: 450px) {
      width: 70vw;
    }
  }
`;

export const SuccessPopup = styled.div`
  z-index: 20;
  width: 200px;
  background-color: white;
  color: #00a941;
  font-weight: bold;
  height: 100px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  z-index: 15;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0, 0.3);
`;