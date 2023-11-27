import { Header } from "../../Header/Header"
import { Footer } from "../Footer"
import { Container, HeaderBackground, Text } from "./CompanyStyled"
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

export const ContactUs = () => {
    const context = useContext(GlobalContext);
    const { changeScreen, cont, renderScreen } = context;

    return (
        <>
        <Header headerColor="dark" cont={cont} changeScreen={changeScreen} />
        <Container >
            <h4>Company</h4>
            <di>
                <h4>Contact us</h4>
                <Text>
                    <h5>Contact us</h5>
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