import { styled } from "styled-components";

export const HomeStyle = styled.section`
    min-height: 50vh;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 50px;
    div{
        display: flex;
        gap: 20px;
        justify-content: space-between; 
        align-items: center;
        width: 93%;
        margin-bottom: 10px;
        select{
            margin-left: 10px;
            opacity: 0.7;
            height: 25px;
            font-size: 16px;
        }
} 
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
    margin-top: 250px;
    div{
        flex-direction: column;
    }
}
`