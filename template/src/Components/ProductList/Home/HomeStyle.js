import {styled} from "styled-components";

export const HomeStyle = styled.section`
    
    min-height: 50vh;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    div{
        display: flex;
        justify-content: space-between; 
        align-items: center;
        width: 83%;
        
        select{
            margin-left: 10px;
            opacity: 0.7;
            height: 25px;
            font-size: 16px;
        }
} 
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
    margin-top: 70px;
    /* display: grid;
    grid-template-columns: 1fr; */
    width: 100vw;
}
    
`