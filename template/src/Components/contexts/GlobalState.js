import { useState } from 'react';
import { GlobalContext } from "./GlobalContext";
import { Cart } from '../ShoppingCart/Cart/Cart';
import { CreateProduct } from '../CreateProduct/CreateProduct';
import { Modal } from '../Header/Modal';
import { Finish } from '../ShoppingCart/Cart/Finish';
import { ProductPage } from '../ProductPage/ProductPage';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { EditProductForm } from '../ProductList/ProductCard/EditProductForm';

const GlobalState = (props) => {
  const { type: urlType } = useParams();

  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState('');
  const [cont, setCont] = useState('');
  const [selectedProduct, setSelectedProduct] = useState();
  const [type, setType] = useState(urlType || 'all');

  const addProduct = (product) => {
    const cartContainItem = cart.find((item) => item.name === product.name);
    if (cartContainItem) {
      const newCart = cart.map((item) => {
        if (item.name === product.name) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      });
      setCart(newCart);
      setQuantity(product.quantity);
      setAmount(amount + product.price)
    } else {
      product.quantity = 1;
      setQuantity(product.quantity);
      setCart([...cart, product]);
      setAmount(amount + product.price)
    }
  };

  const removeProduct = (product) => {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      setQuantity(product.quantity);
      setAmount(amount - product.price);
      setCart([...cart])
    } else {
      product.quantity = 0;
      const listaFiltrada = cart.filter((item) => item !== product);
      setCart(listaFiltrada);
      setAmount(amount - product.price)
      if (cart.length === 1) {
        localStorage.removeItem("cart");
        setAmount(0);
        setCont("")
      }
    }
  }

  const checkIfAdmin = () => {
    const token = localStorage.getItem("Etoken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      if (userId === "adm") {
        setIsAdmin(true)
      }
    }
  }

  const [isAdmin, setIsAdmin] = useState(false);
  const [screen, setScreen] = useState('Homepage');
  const changeScreen = (newScreen) => { setScreen(newScreen) }

  const renderScreen = () => {
    switch (screen) {
      case "Cart":
        return (<Cart cart={cart} setCart={setCart} setAmount={setAmount} setCont={setCont} amount={amount} removeProduct={removeProduct} changeScreen={changeScreen} />);
      case "pro":
        return (<CreateProduct changeScreen={changeScreen} />);
      case "EditProductForm":
        return (<EditProductForm changeScreen={changeScreen} />);
      case "productPage":
        return (<ProductPage changeScreen={changeScreen} />);
      case "Modal":
        return (<Modal changeScreen={changeScreen} cont={cont} />);
      case "Finish":
        return (<Finish changeScreen={changeScreen} />);
      default:
        return <p></p>
    }
  }

  const context = {
    changeScreen,
    setSelectedProduct,
    selectedProduct,
    renderScreen,
    checkIfAdmin,
    screen,
    setScreen,
    setIsAdmin,
    isAdmin,
    removeProduct,
    addProduct,
    cart,
    setType,
    type,
    amount,
    cart,
    cont,
    quantity,
    setAmount,
    setCart,
    setCont,
    setQuantity
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;