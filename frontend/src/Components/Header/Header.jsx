import { NavStyle, Button, Line, Women, Men, NavBackground, Filter, NavMobile, NavBackground2 } from "./HeaderStyled"
import { useNavigate } from "react-router-dom";
import { goToHome, goToLogin } from "../router/Coordinator";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from '../../Components/contexts/GlobalContext';

export const Header = ({ headerColor }) => {
  const context = useContext(GlobalContext);
  const { type, setType, changeScreen, cont, setAmount, setCart, cart, amount, setCont } = context;

  const navigate = useNavigate();
  const showCart = () => { changeScreen("Cart") }
  const showModal = () => { changeScreen("Modal") }
  const onChangeType = (e) => { setType(e.target.value) }
  const [womenMenuOpen, setWomenMenuOpen] = useState(false);
  const [menMenuOpen, setMenMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    setType("all");
    navigate(path);
    onMouseLeave()
  };

  const onMouseEnterWomen = () => { setWomenMenuOpen(true); setMenMenuOpen(false) };
  const onMouseEnterMen = () => { setMenMenuOpen(true); setWomenMenuOpen(false) };
  const onMouseLeave = () => { setMenMenuOpen(false); setWomenMenuOpen(false) };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (womenMenuOpen || menMenuOpen) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [menMenuOpen, womenMenuOpen]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    const savedAmount = JSON.parse(localStorage.getItem("amount"));
    if (savedCart) {
      setCart(savedCart);
      setAmount(savedAmount);
    } else {
      setCart([])
      setAmount(0)
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("amount", JSON.stringify(amount));
      numberOfItems()
    }
  }, [cart]);

  const numberOfItems = () => {
    let number = 0;
    for (let item of cart) {
      number += item.quantity
      setCont(number)
    }
  }

  return (
    <section id="HEADER">
      <NavStyle className={headerColor === "dark" || type !== "" || womenMenuOpen || menMenuOpen ? "dark" : "light"}>
        <ul>
          <li><Button className="logo" value="all" onClick={() => goToHome(navigate)}>Jacquemus</Button></li>
          <li>
            <button className="women" value="allClothing" onMouseEnter={onMouseEnterWomen}>
              Women
            </button>
          </li>
          <li>
            <button className="men" value="allClothing" onMouseEnter={onMouseEnterMen}>
              Men
            </button>
          </li>
          <li><button onClick={() => goToLogin(navigate)}>Account</button></li>
          <li><button onClick={showCart}>Cart<p>{cont}</p></button></li>
        </ul>
      </NavStyle>
      {womenMenuOpen && (
        <Women isOpen={open} onMouseLeave={onMouseLeave} >
          <Line></Line>
          <div>
            <h5>Bags</h5>
            <ul>
              <li onClick={() => handleNavigate("/Mini-women")}>Mini</li>
              <li onClick={() => handleNavigate("/Crossbody&Handbags-women")}>Crossbody & Handbags</li>
              <li onClick={() => handleNavigate("/Shoulderbags-women")}>Shoulder bags</li>
            </ul>
          </div>

          <div>
            <h5>Ready-to-wear</h5>
            <ul>
              <li onClick={() => handleNavigate("/Dresses&Skirts-women")}>Dresses & Skirts</li>
              <li onClick={() => handleNavigate("/Coats&Jackets-women")}>Coats& Jackets</li>
              <li onClick={() => handleNavigate("/Tops-women")}>Tops</li>
              <li onClick={() => handleNavigate("/T-Shirts-women")}>T-Shirts</li>
              <li onClick={() => handleNavigate("/denim-women")}>denim</li>
            </ul>
          </div>

          <div>
            <h5>Acessories</h5>
            <ul>
              <li onClick={() => handleNavigate("/Hats-women")}>Hats</li>
              <li onClick={() => handleNavigate("/Jewellery-women")}>Jewellery</li>
              <li onClick={() => handleNavigate("/Sunglasses-women")}>Sunglasses</li>
            </ul>
          </div>
        </Women>
      )}
      {menMenuOpen && (
        <Men isOpen={open} onMouseLeave={onMouseLeave}>
          <Line></Line>
          <div>
            <h5>Ready-to-wear</h5>
            <ul>
              <li onClick={() => handleNavigate("/T-Shirts-men")}>T-Shirts</li>
              <li onClick={() => handleNavigate("/Shirts-men")}>Shirts</li>
              <li onClick={() => handleNavigate("/Coats&Jackets-men")}>Coats & Jackets</li>
              <li onClick={() => handleNavigate("/Suits-men")}>Suits</li>
            </ul>
          </div>

          <div>
            <h5>Acessories & Bags</h5>
            <ul>
              <li onClick={() => handleNavigate("/Hats-men")}>Hats</li>
              <li onClick={() => handleNavigate("/Jewellery&Sunglasses-men")}>Jewellery & Sunglasses</li>
              <li onClick={() => handleNavigate("/Bags-men")}>Bags</li>
            </ul>
          </div>
        </Men>
      )}
      <NavMobile>
        <a href="#HEADER"><button value="all" onClick={() => goToHome(navigate)}>Jacquemus</button></a>
        <button onClick={showModal}>Menu<p>{cont}</p></button>
      </NavMobile>
      <NavBackground className={headerColor === "dark" || type !== "" ? "black" : "white"} />
      <NavBackground />
      <Filter id="FILTER"></Filter>
    </section>
  )
}