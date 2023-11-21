import { styled } from "styled-components";

export const HomeStyle = styled.section`
    min-height: 300px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding-left: 5vw;
    margin-top: -100px;
    margin-bottom: 20px;
    h4{
       margin-top: -50px;
    }
    div{
        display: flex;
        gap: 20px;
        justify-content: space-between; 
        align-items: center;
        width: 93%;
        select{
            margin-left: 10px;
            opacity: 0.7;
            height: 25px;
            font-size: 16px;
        }
} 
@media screen and (min-width : 280px) and (max-width : 750px){
    margin-top: 20vh;
    min-height: 220px;
    margin-bottom: 100px;
    justify-content: center;
    div{
        flex-direction: column;
    }
    h4{
       margin-top: -90px;
    }
}
@media screen and (min-width : 751px) and (max-width : 900px){
    margin-top: 100px;
    min-height: 220px;
    margin-bottom: 50px;
    justify-content: center;
    div{
        flex-direction: row;
    }
    h4{
       margin-top: -80px;
    }
}
`

export const ProductGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    gap: 0;
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    height: fit-content;
    margin-top: -150px;
`

export const Loading = styled.div`
z-index: 40;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

export const NavBackground = styled.div`
z-index: 5;
    width: 100vw;
    height: 60px;
    background-color: rgb(19, 19, 19);
    position: fixed;
    top: 0;
`

export const Div = styled.div`
z-index: 10;
    display: flex;
    div{
    z-index: 10;
    display: flex;
      width: 100vw;
      height: 700px;
      overflow: hidden;
      justify-content: center;
    }
    :nth-child(1){
        @media screen and (min-device-width : 280px) and (max-device-width : 700px) {
            width: 0;
        }
    }
    :nth-child(2){
        @media screen and (min-device-width : 280px) and (max-device-width : 700px) {
            width: fit-content;
            height: 45rem;
        }
    }
`

export const Img = styled.img`
   width: 100%;
    height: fit-content;
    min-height: 900px;
    min-width: 700px;position: absolute;
top: 0;
    position: relative;
    top: 0;
    z-index: 10;
`
export const Img2 = styled.img`
    width: 100%;
    height: fit-content;
    min-height: 900px;
    min-width: 700px;
    position: relative;
    bottom: 40px;
    z-index: 10;
`