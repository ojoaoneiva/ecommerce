import { styled } from "styled-components";

export const Container = styled.div`
    background-color: white;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 90px;
        }
`

export const Form = styled.form`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: start;
    border: 1px solid gray;
    gap: 20px;
`

export const SuccessPopup = styled.div`
    z-index: 20;
    width: 20vw;
    background-color: black;
    color: white;
    height: 20vh;
    position: fixed;
    top: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Background = styled.div`
    z-index: 15;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgb(0, 0, 0, 0.3);
`