import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import {Filter} from './Components/Filters/Filters';
import {Home} from './Components/ProductList/Home/Home';
import {Cart} from './Components/ShoppingCart/Cart/Cart';
import {produtos} from './assets/productList';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`

function App() {
  const [minFilter,setMinFilter]=useState("");
  const [maxFilter,setMaxFilter]=useState("");
  const [searchFilter,setSearchFilter]=useState("");
  const [cart,setCart]=useState("");
  const [amount,setAmount]=useState("");
  const onChangeSearchFilter =(event)=>{setSearchFilter(event.target.value)};
  const onChangeMinFilter =(e)=>{setMinFilter(e.target.value)}
  const onChangeMaxFilter =(event)=>{setMaxFilter(event.target.value)};
  const onChangeCart =(event)=>{setCart(event.target.value)};
  const onChangeAmount =(event)=>{setAmount(event.target.value)};

  return (
    <>
    <GlobalStyle/>
    <Main>
      <Filter minFilter={minFilter} onChangeMinFilter={onChangeMinFilter} maxFilter={maxFilter} onChangeMaxFilter={onChangeMaxFilter} searchFilter={searchFilter} onChangeSearchFilter={onChangeSearchFilter}/>
      <Home produtos={produtos} cart={cart} onChangeCart={onChangeCart} amount={amount} onChangeAmount={onChangeAmount} />
      <Cart cart={cart} onChangeCart={onChangeCart} amount={amount} onChangeAmount={onChangeAmount}/>
    </Main>
    </>
    
  );
}

export default App;
