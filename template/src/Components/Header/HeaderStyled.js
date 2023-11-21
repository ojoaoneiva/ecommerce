import styled, { keyframes } from 'styled-components';

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
  left: 0;
  top: 0;
  z-index: 13;
  display: flex;
  gap: 10vw;
  padding: 50px;
  padding-top: 70px;
  padding-left: 20vw;
  position: fixed;
  animation: ${slideDownAnimation} ${(props) => (props.isOpen ? '0s' : '0.3s')} ease;

  div {
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      cursor: pointer;

      li:hover {
        color: gray;
      }
    }
  }
`;

export const Men = styled.div`
  background-color: white;
  color: black;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 13;
  display: flex;
  gap: 10vw;
  padding: 50px;
  padding-top: 70px;
  padding-left: 20vw;
  position: fixed;
  animation: ${slideDownAnimation} ${(props) => (props.isOpen ? '0s' : '0.3s')} ease;

  div {
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      cursor: pointer;

      li:hover {
        color: gray;
      }
    }
  }
`;

export const Line = styled.div`
  width: 100vw;
  background-color: gray;
  height: 1px;
  position: fixed;
  top: 60px;
  left: 0;
`;

export const Button = styled.button`
  font-weight: 800;
  text-transform: uppercase;
`;

export const NavStyle = styled.nav`
  position: relative;
  z-index: 15;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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
    width: 100%;

    @media screen and (min-device-width: 280px) and (max-device-width: 700px) {
      display: none;
    }

    .logo {
      font-size: 20px;
    }

    li,
    button {
      height: 25px;
      font-size: 16px;
      text-decoration: none;
      color: white;
      background-color: transparent;
      border: transparent;
      background: no-repeat 0 100%;
      background-image: linear-gradient(currentColor, currentColor);
      background-size: 0% 2px;
      transition: background-size 0.3s ease;
      color: black;
    }

    li:hover,
    button:hover {
      background-size: 100% 2px;
    }

    p {
      color: white;
      font-size: 20px;
      font-weight: 600;
      position: relative;
      bottom: 30px;
      left: 40px;
    }
  }
`;

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

  a {
    button {
      text-transform: uppercase;
      font-weight: 800;
    }
  }

  li,
  button {
    height: 25px;
    font-size: 16px;
    text-decoration: none;
    color: white;
    background-color: transparent;
    border: transparent;
    color: black;
  }

  @media screen and (min-device-width: 701px) {
    display: none;
  }
`;

export const Div = styled.div`
  z-index: 10;
  display: flex;

  div {
    z-index: 10;
    display: flex;
    width: 100vw;
    height: 700px;
    overflow: hidden;
    justify-content: center;
  }

  :nth-child(1) {
    @media screen and (min-device-width: 280px) and (max-device-width: 700px) {
      width: 0;
    }
  }

  :nth-child(2) {
    @media screen and (min-device-width: 280px) and (max-device-width: 700px) {
      width: fit-content;
      height: 45rem;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: fit-content;
  min-height: 900px;
  min-width: 700px;
  position: relative;
  top: 0;
`;

export const Img2 = styled.img`
  width: 100%;
  height: fit-content;
  min-height: 900px;
  min-width: 700px;
  position: relative;
  bottom: 40px;
`;

export const NavBackground = styled.div`
  z-index: 11;
  width: 100vw;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
`;

export const NavBackground2 = styled.div`
  z-index: 80;
  width: 100vw;
  height: 60px;
  background-color: red;
`;

export const Filter = styled.div`
  position: relative;
  bottom: 60px;
  height: 60px;
`;