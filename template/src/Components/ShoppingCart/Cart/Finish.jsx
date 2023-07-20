import { FinishMessage, Background } from "./FinishStyle"

export const Finish = ({ changeScreen }) => {
    const showHomepage = () => { changeScreen("Homepage") }
    return (
        <Background>
            <FinishMessage>
                <h1>
                    COMPRA FINALIZADA COM SUCESSO!
                </h1>
                <p>Agradecemos por comprar conosco! Você pode acompanhar seu pedido pelo link enviado no email cadastado. </p>
                <button onClick={showHomepage}>OK</button>
            </FinishMessage>
        </Background>
    )
}