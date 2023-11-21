import React, { useState } from "react";
import axios from "axios";
import { Container, Background } from "./EditProductFormStyled";
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

export const EditProductForm = () => {
  const context = useContext(GlobalContext);
  const { changeScreen, selectedProduct } = context;
  const [isEditing, setIsEditing] = useState(true);

  const showHomepage = () => {
    changeScreen("Homepage");
  };

  const [newName, setNewName] = useState(selectedProduct.name);
  const [newPrice, setNewPrice] = useState(selectedProduct.price);
  const [newDescription, setNewDescription] = useState(selectedProduct.description);
  const [image1, setNewImageUrl1] = useState(selectedProduct.imageUrl1);
  const [image2, setNewImageUrl2] = useState(selectedProduct.imageUrl2);
  const [image3, setNewImageUrl3] = useState(selectedProduct.imageUrl3);

  const editPost = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newName || "");
      formData.append("price", parseFloat(newPrice));
      formData.append("description", newDescription || "");
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      await axios.put(`http://localhost:3003/product/${selectedProduct.id}`, formData);

      showHomepage();
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleNewPriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setNewImageUrl1(file);
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setNewImageUrl2(file);
  };

  const handleFileChange3 = (e) => {
    const file = e.target.files[0];
    setNewImageUrl3(file);
  };

  return (
    <>
      <Background overlay={isEditing} className="background">
        <Container>
          <h2>Edit Product</h2>
          <div>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                className="name"
                type="text"
                name="name"
                value={newName}
                onChange={handleNewNameChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                className="price"
                type="number"
                name="price"
                value={newPrice}
                onChange={handleNewPriceChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                className="description"
                name="description"
                value={newDescription}
                onChange={handleNewDescriptionChange}
              />
            </div>
            <div>
              <label htmlFor="imageUrl1">Image 1:</label>
              <input
                className="imageUrl1"
                type="file"
                accept="image/*"
                name="imageUrl1"
                onChange={handleFileChange1}
              />
            </div>
            <div>
              <label htmlFor="imageUrl2">Image 2:</label>
              <input
                className="imageUrl2"
                type="file"
                accept="image/*"
                name="imageUrl2"
                onChange={handleFileChange2}
              />
            </div>
            <div>
              <label htmlFor="imageUrl3">Image 3:</label>
              <input
                className="imageUrl3"
                type="file"
                accept="image/*"
                name="imageUrl3"
                onChange={handleFileChange3}
              />
            </div>
            <div className="buttonscontainer">
              <button className="Save" type="button" onClick={editPost}>
                Save
              </button>
              <button className="Cancel" type="button" onClick={showHomepage}>
                Cancel
              </button>
            </div>
          </div>
        </Container>
      </Background>
    </>
  );
};