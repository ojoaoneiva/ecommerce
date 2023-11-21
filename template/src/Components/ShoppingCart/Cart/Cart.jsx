import { Items } from "../Items/Items"
import { CartStyle, Background, Div1, Div2, Div3 } from "./CartStyle"

export const Cart = ({ cart, setCart, amount, setAmount, setCont, removeProduct, changeScreen }) => {
    const showHomepage = () => { changeScreen("Homepage") }
    const finish = () => {
        changeScreen("Finish");
        setCart([]); setAmount(0); setCont("");
        localStorage.removeItem("cart")
    }
    return (
        <Background>
            <CartStyle>
                <Div1>
                    <button onClick={showHomepage}>+</button>
                    <h2>Shopping cart</h2>
                </Div1>
                <Div2>
                    {cart.map((product, index) => { return (<Items product={product} key={index} removeProduct={removeProduct} />) })}
                </Div2>
                <Div3>
                    <p>Total Amount: {amount} EUR</p>
                    <div>
                        <button onClick={showHomepage}>Continue Shopping</button>
                        <button onClick={finish}>Finish Purchase</button>
                    </div>
                </Div3>
            </CartStyle>
        </Background>
    )
}