import { styled } from "styled-components";

export const Container = styled.div`
.slick-prev,
  .slick-next {
    display: none !important;
  }
  .image-container {
    cursor: grab;
    overflow: hidden;
    background-color: white;
    .slider{
     margin-bottom: -4px;
    }
    &:active {
      cursor: grabbing;
    }
    margin: -3px;
    margin-top: 2px;
    width: 100%;
    position: relative;
    .nextButton {
      left: 5%;
    }
    .prevButton {
      right: 5%;
    }
    .prevButton,
    .nextButton {
      top: 50%;
      position: absolute;
      opacity: 1;
      border: none;
      cursor: pointer;
      font-size: 26px;
      background-color: transparent;
      @media screen and (min-width : 280px) and (max-width : 750px){
        font-size: 20px;
}
    }
  }
  &.visible {
    opacity: 1;
  }
    width: 86%;
    background-color: white;
    display: flex;
    gap: 20vw;
    margin-top: -1px;
    margin-bottom: -16px;
    overflow: hidden;
    @media screen and (min-width : 280px) and (max-width : 750px){
        flex-direction: column;
        width: 100%;
}
`;

export const Info = styled.div`
    margin-left: -10vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 50vh;
    margin-top: 20vh;
    @media screen and (min-width : 280px) and (max-width : 750px){
        margin-top: -100px;
        padding-top: 0;
        margin-left: 0;
        padding: 10vw;
        height: fit-content;
}
    h4 {
        font-weight: normal;
        font-size: 18px;
    }
    ul {
        width: 25vw;
        display: flex;
        list-style: none;
        justify-content: space-between;
        padding-left: 0;
        @media screen and (min-width : 280px) and (max-width : 750px){
            width: 80vw;
}
        li {
            cursor: pointer;
            padding: 5px;
            color: gray;
            background:  no-repeat 0 100%;
    background-image: linear-gradient(currentColor, currentColor);
    background-size: 0% 2px;
    transition: background-size .3s ease;
    &:hover {
                background-size: 100% 2px;
            }
            &.selected {
                background-size: 100% 2px;
                color: black;
            }
        }
    }
    button {
        background-color: ${(props) => (props.selectedsize !== "" || props.haveSize==false ? "black" : "transparent")};
        cursor: pointer;
        border: 1px solid black;
        padding: 5px;
        font-size: 16px;
        width: 25vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media screen and (min-width : 280px) and (max-width : 750px){
            width: 80vw
        }
        color: ${(props) => (props.selectedsize !== "" || props.haveSize==false ? "white" : "black")};
        p:nth-child(2) {
            opacity: ${(props) => (props.selectedsize === "" ? "0" : "1")};
            transition: opacity 0.3s;
        }
        
        &:hover {
            background-color: ${(props) => (props.selectedsize !== "" || props.haveSize==false ? "rgba(0, 0, 0, 0.9)" : "transparent")};
            color: ${(props) => (props.selectedSize === "" ? "black" : "white")};
            p:first-child {
                opacity: ${(props) => (props.selectedSize !== "" ? "1" : "0")};
                transition: opacity 0.3s;
                
            }
            p:nth-child(2) {
                opacity: ${(props) => (props.selectedsize === "" ? "1" : "0")};
                transition: opacity 0.3s;
                color: black;
            }
            div {
                opacity: ${(props) => (props.selectedsize === "" ? "1" : "1")};
                transition: opacity 0.3s;
            }
        }
    }
`;