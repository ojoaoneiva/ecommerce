import { Product, Div, Edit } from "./ProductCardStyle"
import { useNavigate } from "react-router-dom";
import { goToProductPage } from "../../router/Coordinator";
import axios from "axios";
import { EditProductForm } from "./EditProductForm";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useRef } from 'react';
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import { BASE_URL } from "../../constants/BASE_URL";

export const ProductCard = ({ product }) => {

  const context = useContext(GlobalContext);
  const { isAdmin, changeScreen, setSelectedProduct } = context;

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const showHomepage = () => {
    changeScreen("Homepage");
  };
  
  const handleDeleteClick = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");

    if (isConfirmed) {
      try {
        await axios.delete(`${BASE_URL}/products/${product.id}`);
        showHomepage();
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const showEdit = (product) => { changeScreen("EditProductForm"); setSelectedProduct(product) }

  const handleClick = (e) => {
    const isButton =
      e.target.classList.contains("prevButton") ||
      e.target.classList.contains("nextButton") ||
      e.target.classList.contains("delete") ||
      e.target.classList.contains("edit") ||
      e.target.classList.contains("Cancel") ||
      e.target.classList.contains("Save") ||
      e.target.classList.contains("name") ||
      e.target.classList.contains("price") ||
      e.target.classList.contains("description") ||
      e.target.classList.contains("imageUrl1") ||
      e.target.classList.contains("imageUrl2") ||
      e.target.classList.contains("imageUrl3") ||
      e.target.classList.contains("background")

    if (!isButton) {
      goToProductPage(navigate, product);
    }
  };

  return (
    <Product
      ref={ref}
      className={`${inView ? 'visible' : ''} ${isDragging ? 'dragging' : ''}`}
      onClick={handleClick}
    >
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
        <Div className="text" >
          {isAdmin && (
            <Edit>
              <button className="edit" onClick={() => showEdit(product)}>edit</button>
              <button className="delete" onClick={handleDeleteClick}>delete</button>
            </Edit>
          )}
          <div>
            <h4>{product.name}</h4>
            <div c>{product.price} EUR</div>
          </div>
          <p lassName="description">{product.description}</p>
        </Div>
      </div>

      {isEditing && (
        <EditProductForm
          product={product}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
          isEditing={isEditing}
          handleClick={handleClick}
          changeScreen={changeScreen}
        />
      )}
    </Product>
  )
}