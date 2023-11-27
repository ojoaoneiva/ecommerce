import { NavStyle, Background, Women, Men, Ul } from "./ModalStyled"
import { Button, Line, Filter, } from "./HeaderStyled"
import { useNavigate } from "react-router-dom";
import { goToLogin, goToHome } from "../router/Coordinator";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from '../../Components/contexts/GlobalContext';

export const Modal = () => {
  const context = useContext(GlobalContext);
  const { setType, changeScreen, cont, setAmount, setCart, cart, amount, setCont } = context;
  const navigate = useNavigate();
  const showCart = () => { changeScreen("Cart") }
  const showHomepage = () => { changeScreen("Homepage") }
  const onChangeType = (e) => { setType(e.target.value) }

  const [womenMenuOpen, setWomenMenuOpen] = useState(false);
  const [menMenuOpen, setMenMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState({});

  const toggleOpen2 = (section) => {
    setIsOpen2((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = false;
      });
      newState[section] = !prevState[section];
      return newState;
    });
  };

  const handleNavigate = (path) => {
    setType("all");
    navigate(path);
    onMouseLeave()
  };

  const home = () => { goToHome(navigate); showHomepage() };
  const onAcount = () => { showHomepage(); goToLogin(navigate) };
  const onMouseWomen = () => { setWomenMenuOpen(true); setMenMenuOpen(false) };
  const onMouseMen = () => { setMenMenuOpen(true); setWomenMenuOpen(false) };
  const onMouseLeave = () => { setMenMenuOpen(false); setWomenMenuOpen(false); showHomepage() };
  const closeMenAndWomen = () => { setMenMenuOpen(false); setWomenMenuOpen(false) };

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
      <Background>
        <NavStyle >
          {(!menMenuOpen && !womenMenuOpen) && (
            <ul>
              <li><Button value="all" onClick={home}>Jacquemus</Button></li>
              <li>
                <button className="women" value="allClothing" onClick={onMouseWomen}>
                  Women
                </button>
              </li>
              <li>
                <button className="men" value="allClothing" onClick={onMouseMen}>
                  Men
                </button>
              </li>
              <li><button onClick={onAcount}>Account</button></li>
              <li><button onClick={showCart}>Cart<p>{cont}</p></button></li>
              <button onClick={showHomepage} className="x">+</button>
            </ul>
          )}
        </NavStyle>
        {womenMenuOpen && (
          <Women isOpen={open} >
            <Line></Line>
            <div className="back" onClick={closeMenAndWomen}>{"<"}</div>
            <div>
              <h5 onClick={() => toggleOpen2('Bags')}>Bags</h5>
              <Ul isOpen2={isOpen2['Bags']}>
                <li onClick={() => handleNavigate("/Mini-women")}>Mini</li>
                <li onClick={() => handleNavigate("/Crossbody&Handbags-women")}>Crossbody & Handbags</li>
                <li onClick={() => handleNavigate("/Shoulderbags-women")}>Shoulder bags</li>
              </Ul>
            </div>

            <div>
              <h5 onClick={() => toggleOpen2('ReadyW')}>Ready-to-wear</h5>
              <Ul isOpen2={isOpen2['ReadyW']}>
                <li onClick={() => handleNavigate("/Dresses&Skirts-women")}>Dresses & Skirts</li>
                <li onClick={() => handleNavigate("/Coats&Jackets-women")}>Coats& Jackets</li>
                <li onClick={() => handleNavigate("/Tops-women")}>Tops</li>
                <li onClick={() => handleNavigate("/T-Shirts-women")}>T-Shirts</li>
                <li onClick={() => handleNavigate("/denim-women")}>denim</li>
              </Ul>
            </div>

            <div>
              <h5 onClick={() => toggleOpen2('AcessoriesW')}>Acessories</h5>
              <Ul isOpen2={isOpen2['AcessoriesW']}>
                <li onClick={() => handleNavigate("/Hats-women")}>Hats</li>
                <li onClick={() => handleNavigate("/Jewellery-women")}>Jewellery</li>
                <li onClick={() => handleNavigate("/Sunglasses-women")}>Sunglasses</li>
              </Ul>
            </div>
          </Women>
        )}
        {menMenuOpen && (
          <Men isOpen={open}>
            <Line></Line>
            <div className="back" onClick={closeMenAndWomen}>{"<"}</div>
            <div>
              <h5 onClick={() => toggleOpen2('Ready')}>Ready-to-wear</h5>
              <Ul isOpen2={isOpen2['Ready']}>
                <li onClick={() => handleNavigate("/T-Shirts-men")}>T-Shirts</li>
                <li onClick={() => handleNavigate("/Shirts-men")}>Shirts</li>
                <li onClick={() => handleNavigate("/Coats&Jackets-men")}>Coats & Jackets</li>
                <li onClick={() => handleNavigate("/Suits-men")}>Suits</li>
              </Ul>
            </div>

            <div>
              <h5 onClick={() => toggleOpen2('Accessories')}>Accessories & Bags</h5>
              <Ul isOpen2={isOpen2['Accessories']}>
                <li onClick={() => handleNavigate("/Hats-men")}>Hats</li>
                <li onClick={() => handleNavigate("/Jewellery&Sunglasses-men")}>Jewellery & Sunglasses</li>
                <li onClick={() => handleNavigate("/Bags-men")}>Bags</li>
              </Ul>
            </div>
          </Men>
        )}
      </Background>
      <Filter id="FILTER"></Filter>
    </section>
  )
}