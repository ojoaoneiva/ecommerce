import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Background, SuccessPopup } from "./AccountStyled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { goToSignUp, goToCreateProduct, goToHome } from "../router/Coordinator";
import { useContext } from "react";
import { GlobalContext } from '../../Components/contexts/GlobalContext';
import { BASE_URL } from "../constants/BASE_URL";
import { jwtDecode } from 'jwt-decode';

export const Login = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { checkIfAdmin, isAdmin, setIsAdmin, changeScreen, renderScreen } = context;
  const [token, setToken] = useState(false);

  useEffect(() => {
    checkIfAdmin();
    if (localStorage.getItem("Etoken")) {
      setToken(true)
      const decodedToken = jwtDecode(localStorage.getItem("Etoken"));
      const userId = decodedToken.id;
      if (userId === "adm") {
        setIsAdmin(true)
      }
    } else {
      setToken(false)
    }
  }, []);

  const [userCredentials, setUserCredentials] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/login`, userCredentials);
      setShowSuccessPopup(true);
      localStorage.setItem("Etoken", response.data.token);
      setTimeout(() => {
        setUserCredentials({
          email: "",
          password: "",
        });
        setShowSuccessPopup(false);
        checkIfAdmin()
        if (!isAdmin) {
          goToHome(navigate)
        } else {
          goToCreateProduct(navigate)
        }
      }, 2000);
    } catch (error) {
      alert("erro")
      console.error("Erro:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("Etoken");
    setToken(false);
  };

  return (<>
    {token === true ? (
      <>
        <Header changeScreen={changeScreen} />
        <Container>
          <h2>Welcome!</h2>
          <p>
            Check your cart and finish shopping.
          </p>
          <button className="changePage" onClick={logout}>
            Logout
          </button>
          {isAdmin && (<button onClick={() => goToCreateProduct(navigate)}>Post a product</button>)}
        </Container>
        {renderScreen()}
        <Footer />
      </>
    ) : (
      <>
        <Header changeScreen={changeScreen} />
        <Container>
          <Form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
              <p>Please enter your email and password</p>
              <button className="changePage" onClick={() => goToSignUp(navigate)}>Sign up</button>
            </div>
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
            <button className="submit" type="submit">Login</button>
          </Form>

          {isAdmin && (<button onClick={() => goToCreateProduct(navigate)}>Post a product</button>)}
        </Container>
        {showSuccessPopup && (
          <>
            <Background>
              <SuccessPopup>
                <p>Success! welcome.</p>
              </SuccessPopup>
            </Background>
          </>
        )}
        {renderScreen()}
        <Footer />
      </>)}</>
  );
};