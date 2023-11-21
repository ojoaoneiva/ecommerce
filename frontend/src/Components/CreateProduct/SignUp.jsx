import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Background, SuccessPopup } from "./AccountStyled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { goToLogin, goToHome } from "../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from '../../Components/contexts/GlobalContext';

export const SignUp = () => {

  const context = useContext(GlobalContext);
  const { renderScreen, changeScreen } = context;
  const navigate = useNavigate();
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Etoken")) {
      setToken(true)
    } else {
      setToken(false)
    }
  }, []);

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3003/signup", userCredentials);
      console.log(response.data);
      setShowSuccessPopup(true);

      localStorage.setItem("Etoken", response.data.token);
      setTimeout(() => {
        setUserCredentials({
          name: "",
          email: "",
          password: "",
        });
        setShowSuccessPopup(false);
      }, 1000);
      goToHome()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("Etoken");
    setToken(false);
  };

  return (
    <>
      {token === true ? (
        <>
          <Header headerColor="dark" changeScreen={changeScreen} />
          <Container>
            <h2>Welcome!</h2>
            <button className="changePage" onClick={logout}>
              Logout
            </button>
          </Container>
          {renderScreen()}
          <Footer />
        </>
      ) : (
        <>
          <Header changeScreen={changeScreen} />
          <Container>
            <Form onSubmit={handleSignup}>
              <h2>Sign up</h2>
              <div>
                <p>Please enter your name, email and password</p>
                <button className="changePage" onClick={() => goToLogin(navigate)}>Back to login</button>
              </div>
              <input
                placeholder="Name"
                type="name"
                name="name"
                value={userCredentials.name}
                onChange={handleInputChange}
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={userCredentials.email}
                onChange={handleInputChange}
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={userCredentials.password}
                onChange={handleInputChange}
              />

              <button className="submit" type="submit">Create account</button>
            </Form>
            {showSuccessPopup && (
              <>
                <Background></Background>
                <SuccessPopup>
                  <p>Success! User created.</p>
                </SuccessPopup>
              </>
            )}
          </Container>
          {renderScreen()}
          <Footer />
        </>)}
    </>
  );
};