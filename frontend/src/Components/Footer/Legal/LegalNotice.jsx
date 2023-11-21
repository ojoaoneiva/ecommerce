import { Header } from "../../Header/Header"
import { Footer } from "../Footer"
import { Container, HeaderBackground, Text } from "./LegalStyled"

export const LegalNotice = () => {

    return (
        <>
        <Header headerColor="dark"/>
        <HeaderBackground></HeaderBackground>
        <Container >
            <h4>Legals</h4>
            <di>
                <h4>Legal Notice</h4>
                <Text>
                    <h5>Publisher</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>
                </Text>
            </di>
        </Container>
        <Footer/>
        </>
    )
}