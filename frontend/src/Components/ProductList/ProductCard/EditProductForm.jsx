import { storage } from "../../CreateProduct/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import axios from "axios";
import { Container, Background, Div } from "./EditProductFormStyled";
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import { BASE_URL } from "../../constants/BASE_URL";

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
  
  const editPost = async () => {
    try {
      const body = {
        name: newName || "",
        price: parseFloat(newPrice),
        description: newDescription || "",
        imageURL1: imgURLs[0],
        imageURL2: imgURLs[1],
        imageURL3: imgURLs[2]
      }
      await axios.put(`${BASE_URL}/product/${selectedProduct.id}` , body);
      console.log(body)
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
