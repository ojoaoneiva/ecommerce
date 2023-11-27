import { Header } from "../../Header/Header"
import { Footer } from "../Footer"
import { Container, HeaderBackground, Text } from "./FAQStyled"
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

export const Payments = () => {
    const context = useContext(GlobalContext);
    const { changeScreen, cont, renderScreen } = context;

    return (
        <>
        <Header headerColor="dark" cont={cont} changeScreen={changeScreen} />
        <Container >
            <h4>FAQ</h4>
            <di>
                <h4>Payments</h4>
                <Text>
                    <h5>What are the payment methods available?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>

                    <h5>Why was my payment refused?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>

                    <h5>Where can I find my invoice?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>
                </Text>
            </di>
        </Container>
        {renderScreen()}
        <Footer/>
        </>
    )
}