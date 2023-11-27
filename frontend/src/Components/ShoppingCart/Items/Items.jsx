import { CartStyle } from "./ItemsStyle"
import { BASE_URL } from "../../constants/BASE_URL";

export const Items = ({ product, removeProduct }) => {

    return (
        <>
            <CartStyle>
                <img
                    className="image-main"
                    src={product.image_url_1}
                    alt={product.name}
                />
                <div>
                    <button onClick={() => { removeProduct(product) }}>Remove</button>
                    <p className="qnt">{product.quantity}x </p>
                    <div className="name">
                        <p> {product.name}</p>
                        <h5 className="value"> {product.price} EUR </h5>
                    </div>
                </div>
            </CartStyle>
        </>
    )
}