import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, SuccessPopup, Background } from "./AccountStyled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext';

export const CreateProduct = () => {
  const context = useContext(GlobalContext);
  const { checkIfAdmin, isAdmin } = context;

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    type: "",
    image1: null,
    image2: null,
  });

  useEffect(() => {
    checkIfAdmin()
  }, []);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3003/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const logout = () => {
    localStorage.removeItem("Etoken");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setNewProduct({
      ...newProduct,
      image1: file,
    });
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setNewProduct({
      ...newProduct,
      image2: file,
    });
  };

  const clearForm = () => {
    setNewProduct({
      name: "",
      price: null,
      description: "",
      type: "",
      image1: null,
      image2: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newProduct.name);
      formData.append("price", newProduct.price);
      formData.append("description", newProduct.description);
      formData.append("type", newProduct.type);

      if (newProduct.image1) {
        formData.append("image1", newProduct.image1);
      }
      if (newProduct.image2) {
        formData.append("image2", newProduct.image2);
      }
      await axios.post("http://localhost:3003/products", formData, {});

      fetchProducts();
      setShowSuccessPopup(true);
      setTimeout(() => {
        clearForm();
        setShowSuccessPopup(false);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return isAdmin ? (
    <>
      <Header headerColor="dark" />
      <Container>

        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Add new product</h2>
          <div>
            <p>
              All the inputs are required.
            </p>
            <button className="changePage" onClick={logout}>Logout</button>
          </div>

          <input
            placeholder="name"
            required
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <input
            placeholder="price"
            required
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <input
            placeholder="description"
            required
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />

          <input
            placeholder="type"
            required
            type="text"
            name="type"
            value={newProduct.type}
            onChange={handleInputChange}
          />

          <input
            placeholder="image1"
            required
            type="file"
            accept="image/*"
            name="image1"
            onChange={handleFileChange1}
          />

          <input
            placeholder="image2"
            type="file"
            accept="image/*"
            name="image2"
            onChange={handleFileChange2}
          />
          <button className="submit" type="submit">Add product</button>
        </Form>

        {showSuccessPopup && (
          <>
            <Background></Background>
            <SuccessPopup>
              <p>Product added succesfully!</p>
            </SuccessPopup>
          </>
        )}
      </Container>
      <Footer />
    </>
  ) : (
    <>
      <Header/>
      <Container>
      </Container>
      <div>Only authorized employees can access this route.</div>
      <Footer />
    </>
  );
};