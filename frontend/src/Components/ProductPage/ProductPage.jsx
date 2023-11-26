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
import { BASE_URL } from "../constants/BASE_URL";

export const ProductPage = () => {
    const context = useContext(GlobalContext);
    const { addProduct, renderScreen, changeScreen, cont } = context;
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const pathParams = useParams();
    const id = pathParams.id;
    const [product, setProduct] = useState(null);
    const [haveSize, setHaveSize] = useState(true);

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
            const response = await axios.get(`${BASE_URL}/products`);
            const prod = response.data;
            const filteredProduct = prod.filter((product) => product.id == id);

            if (filteredProduct.length > 0) {
                setProduct(filteredProduct[0]);
                console.log(filteredProduct[0])
                if(filteredProduct[0].type=="Bags-men" || 
                filteredProduct[0].type=="Jewellery&Sunglasses-men" ||
                filteredProduct[0].type=="Hats-men" ||
                filteredProduct[0].type=="Hats-women" ||
                filteredProduct[0].type=="Jewellery-women" ||
                filteredProduct[0].type=="Sunglasses-women" ||
                filteredProduct[0].type=="Mini-women" ||
                filteredProduct[0].type=="Crossbody&Handbags-women" ||
                filteredProduct[0].type=="Shoulderbags-women")
                {setHaveSize(false)}
                else(setHaveSize(true))
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
                                    src={product.image_url_1}
                                    alt={product.name}
                                />
                                {product.image_url_2 && (
                                    <img
                                        className="image-secondary"
                                        src={product.image_url_2}
                                        alt={product.name}
                                    />
                                )}
                                {product.image_url_3 && (
                                    <img
                                        className="image-secondary"
                                        src={product.image_url_3}
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
                        <Info selectedsize={selectedSize} haveSize={haveSize}>
                            <h4>{product.name}</h4>
                            <div>{product.description}</div>
                            
                            <div>
                                <p>Size</p>
                                { haveSize ?
                                (<ul>
                                    {sizes.map((size) => (
                                        <li
                                            key={size}
                                            onClick={() => handleSizeSelection(size)}
                                            className={selectedSize === size ? "selected" : ""}
                                        >
                                            {size}
                                        </li>
                                    ))}
                                </ul>) 
                                :
                                (<ul>
                                        <li> OS </li>
                                </ul>)}
                            </div>
                            <button onClick={handleAddToCart}>
                                {selectedSize === "" && haveSize && (
                                    <>
                                        <p>Add to cart</p>
                                        <p>Select size</p>
                                    </>)}
                                    
                                {(selectedSize !== "" || haveSize!==true) && (
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