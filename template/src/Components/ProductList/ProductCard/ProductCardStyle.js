import { styled } from "styled-components";

export const Container = styled.figure`
:hover{
    button{
            background-color:black;
            color: white;
    }
    figcaption{
        scale: 1.05;
    }
    img{
        scale: 1.05;
    }
}

`
export const Produto = styled.figure`
    width: fit-content;
    height: fit-content;
    :hover{
        button{
            background-color:black;
            color: white;
    }
    }
    img{
        height:350px;
        width: 298px;
        background-color: #E8E8E8;
    }
`
export const Div = styled.figcaption`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    line-height: 30px;
    button{
        width: 60%;
        height: 30px;
        align-self: center;
        background-color: transparent;
        color: transparent;
        border: 0;
    }
`