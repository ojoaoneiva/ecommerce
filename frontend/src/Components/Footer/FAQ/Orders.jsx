import { Header } from "../../Header/Header"
import { Footer } from "../Footer"
import { Container, HeaderBackground, Text } from "./FAQStyled"
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

export const Orders = () => {
    const context = useContext(GlobalContext);
    const { changeScreen, cont, renderScreen } = context;

    return (
        <>
        <Header headerColor="dark" cont={cont} changeScreen={changeScreen} />
        <Container >
            <h4>FAQ</h4>
            <di>
                <h4>Orders</h4>
                <Text>
                    <h5>How can I know my size?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>

                    <h5>If a product is not in stock, when will it be available again?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>

                    <h5>Can I be notified when the item is available again?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>

                    <h5>How can I know I may order was processed correctly?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>

                    <h5>Can I cancel or modify my order?</h5>
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