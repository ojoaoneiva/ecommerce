import { styled } from "styled-components"

export const CartStyle = styled.div`
    display: flex;
    width: 28vw;
    justify-content:start;
    margin-top: 20px;
    align-items: start;
    div{
        @media screen and (max-width : 500px) {
            width: 55vw;
        }
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 100%;
        justify-content: start;
        padding-left: 20px;
        .name{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
    }
    }
    img{
        width: 100px;
        background-color: #E8E8E8;
    }
    button{
        font-size: 14px;
        align-self:flex-end;
        border: 0;
        text-decoration: underline;
        background-color: transparent;
        cursor: pointer;
    }
`