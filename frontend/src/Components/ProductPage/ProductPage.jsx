import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container, Info } from "./ProductPageStyled";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from '../../Components/contexts/GlobalContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useRef } from 'react';

export const ProductPage = () => {
    const context = useContext(GlobalContext);
    const { addProduct, renderScreen, changeScreen, cont } = context;
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const pathParams = useParams();
    const id = pathParams.id;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [id]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: () => setIsDragging(true),
        afterChange: () => setIsDragging(false),
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3003/products");
            const prod = response.data;
            const filteredProducts = prod.filter((product) => product.id == id);

            if (filteredProducts.length > 0) {
                setProduct(filteredProducts[0]);
            } else {
                console.log("Product not found");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const handleAddToCart = () => {
        if (selectedSize) {
            const productWithSize = { ...product, size: selectedSize };
            addProduct(productWithSize);
        } else {
            console.log("Please select a size before adding to cart.");
        }
    };

    return (
        <>
            <Header headerColor="dark" cont={cont} changeScreen={changeScreen} />
            <Container>
                {product ? (
                    <>
                        <div className="image-container">
                            <Slider className="slider" ref={sliderRef} {...sliderSettings}>
                                <img
                                    className="image-main"
                                    src={`http://localhost:3003/uploads/${product.image_url_1}`}
                                    alt={product.name}
                                />
                                {product.image_url_2 && (
                                    <img
                                        className="image-secondary"
                                        src={`http://localhost:3003/uploads/${product.image_url_2}`}
                                        alt={product.name}
                                    />
                                )}
                                {product.image_url_3 && (
                                    <img
                                        className="image-secondary"
                                        src={`http://localhost:3003/uploads/${product.image_url_3}`}
                                        alt={product.name}
                                    />
                                )}
                            </Slider>
                            <button
                                className="prevButton"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                {">"}
                            </button>
                            <button
                                className="nextButton"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                {"<"}
                            </button>
                        </div>
                        <Info selectedsize={selectedSize}>
                            <h4>{product.name}</h4>
                            <div>{product.description}</div>
                            <div>
                                <p>Size</p>
                                <ul>
                                    {sizes.map((size) => (
                                        <li
                                            key={size}
                                            onClick={() => handleSizeSelection(size)}
                                            className={selectedSize === size ? "selected" : ""}
                                        >
                                            {size}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={handleAddToCart}>
                                {selectedSize === "" && (
                                    <>
                                        <p>Add to cart</p>
                                        <p>Select size</p>
                                    </>)}
                                {selectedSize !== "" && (
                                    <p>Add to cart</p>
                                )}
                                <div>{product.price} EUR</div>
                            </button>
                        </Info>
                    </>
                ) : (
                    <p>Loading...</p>
                )}

            </Container>{renderScreen()}
            <Footer />
        </>
    );
};