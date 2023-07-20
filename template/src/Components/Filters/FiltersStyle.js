import { styled } from "styled-components";

export const Filtro = styled.section`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 30px;
    margin: 0 4%;
    height: 70px;
        @media screen and (min-device-width : 280px) and (max-device-width : 800px) {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            width: 80vw;
            margin-bottom:30rem;
            margin: 0 10%;
        }
    label{
        display: flex;
        margin: 10px 0;
        height: 25px;
        border: 1px solid black;
        opacity: 0.7;
    }
    input{
        border: transparent;
    }
    .value{
        width: 100px;
    }
    .search{
        width: 40vw;
        max-width: 300px;
    }
    button {
        overflow: hidden;
        width: 40px;
        border: 1px solid transparent;
        opacity: 0.7;
    }
    button>img{
        height: 100%;
        }
`