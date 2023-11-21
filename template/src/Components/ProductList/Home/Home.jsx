import { ProductCard } from "../ProductCard/ProductCard";
import { useParams } from 'react-router-dom';
import { HomeStyle, Img, Img2, Div, Loading, ProductGrid } from "./HomeStyle";
import { Footer } from "../../Footer/Footer";
import { Filter } from '../../Filters/Filters';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Header } from '../../Header/Header';
import image1 from "../../../assets/Images/1.webp";
import image2 from "../../../assets/Images/2.webp";
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

export const Home = () => {
  const { type: urlType } = useParams();

  const context = useContext(GlobalContext);
  const { checkIfAdmin, isAdmin, renderScreen, changeScreen, screen, setscreen, addProduct, removeProduct, cart, setCart, amount, setAmount, quantity, setQuantity, cont, setCont, selectedProduct } = context;

  const [ordination, setOrdination] = useState('');
  const onChangeOrdination = (e) => {
    setOrdination(e.target.value);
  };

  const [minFilter, setMinFilter] = useState('');
  const [maxFilter, setMaxFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkIfAdmin()
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3003/products');
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const productsFiltered = products
    .filter((product) => (urlType ? product.type.toLowerCase() === urlType.toLowerCase() : product.type === "Coats&Jackets-men")) // Filter based on the type in the URL
    .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
    .filter((product) => (minFilter ? product.price >= parseFloat(minFilter) : true))
    .filter((product) => (maxFilter ? product.price <= parseFloat(maxFilter) : true));

  useEffect(() => {
    fetchProducts();
  }, [minFilter, maxFilter, searchFilter, ordination, urlType, changeScreen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [urlType]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    const savedAmount = JSON.parse(localStorage.getItem("amount"));
    console.log(savedAmount)
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

  const sortedProducts = productsFiltered.sort((a, b) => {
    if (ordination === "lowToHigh") {
      return a.price - b.price;
    } else if (ordination === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <Header headerColor="light" cont={cont} changeScreen={changeScreen} />

      {!urlType && (
        <Div>
          <div>
            <Img src={image1} />
          </div>
          <div>
            <Img2 src={image2} />
          </div>
        </Div>
      )}
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <Filter minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
          <HomeStyle>
            <div className="box1">
              <p>Number of products: {productsFiltered.length}</p>
              <label> Sorty by
                <select value={ordination} onChange={onChangeOrdination}>
                  <option value={"lowToHigh"}>Price: Low to high</option>
                  <option value={"highToLow"}>Price: High to low</option>
                </select>
              </label>
            </div>
            <h4>
              {urlType ? urlType : ""}
            </h4>
          </HomeStyle>
          <ProductGrid>
            {sortedProducts.map((product, indice) => (
              <ProductCard isAdmin={isAdmin} key={indice} product={product} addProduct={addProduct} />
            ))}
          </ProductGrid>
        </>
      )}
      {renderScreen()}
      <Footer />
    </>
  );
};