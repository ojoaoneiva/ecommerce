import { FinishMessage, Background } from "./FinishStyle"

export const Finish = ({ changeScreen }) => {
    const showHomepage = () => { changeScreen("Homepage") }
    return (
        <Background>
            <FinishMessage>
                <h1>
                    PURCHASE COMPLETED SUCCESSFULLY!
                </h1>
                <p>Thank you for choosing us! We hope you enjoy your purchase.</p>

                <button onClick={showHomepage}>OK</button>
            </FinishMessage>
        </Background>
    )
}