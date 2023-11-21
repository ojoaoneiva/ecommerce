import { CartStyle } from "./ItemsStyle"

export const Items = ({ product, removeProduct }) => {

    return (
        <>
            <CartStyle>
                <img
                    className="image-main"
                    src={`http://localhost:3003/uploads/${product.image_url_1}`}
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