import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, SuccessPopup, Background, Div } from "./AccountStyled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext';
import { BASE_URL } from "../constants/BASE_URL";

export const CreateProduct = () => {
  const [imgURLs, setImgURLs] = useState(["", "", ""]);
  const [progressPercentages, setProgressPercentages] = useState([0, 0, 0]);

  const handleImageUpload = (event, index) => {
    const fileInput = event.target;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgressPercentages((prevProgress) => {
            const newProgress = [...prevProgress];
            newProgress[index] = progress;
            return newProgress;
          });
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgURLs((prevImgURLs) => {
              const newImgURLs = [...prevImgURLs];
              newImgURLs[index] = downloadURL;
              return newImgURLs;
            });
          });
        }
      );
    }
  };

  const context = useContext(GlobalContext);
  const { checkIfAdmin, isAdmin } = context;

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    type: "",
  });

  useEffect(() => {
    checkIfAdmin();
  }, []);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
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

  const clearForm = () => {
    setNewProduct({
      name: "",
      price: 0,
      description: "",
      type: "",
    });
    setImgURLs(["", "", ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: newProduct.name,
        price: newProduct.price,
        description: newProduct.description,
        type: newProduct.type,
        imageURL1: imgURLs[0],
        imageURL2: imgURLs[1],
        imageURL3: imgURLs[2],
      };

      await axios.post(`${BASE_URL}/products`, formData);

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
            <p>All the inputs are required.</p>
            <button className="changePage" onClick={logout}>
              Logout
            </button>
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

          {[0, 1, 2].map((index) => (
            <Div key={index}>
              <input
                type="file"
                onChange={(event) => handleImageUpload(event, index)}
                placeholder={`image${index + 1}`}
              />
              {!imgURLs[index] && <p className="progress">{progressPercentages[index]}%</p>}
            </Div>
          ))}

          <button className="submit" type="submit">
            Add product
          </button>
        </Form>
      </Container>
      {showSuccessPopup && (
        <>
          <Background>
            <SuccessPopup>
              <p>Product created!</p>
            </SuccessPopup>
          </Background>
        </>
      )}
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <Container></Container>
      <div>Only authorized employees can access this route.</div>
      <Footer />
    </>
  );
};