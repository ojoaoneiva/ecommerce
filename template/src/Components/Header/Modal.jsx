import { NavStyle, Filter, Background } from "./ModalStyled"

export const Modal = ({changeScreen,cont,type, setType})=>{
const showCart = () => { changeScreen("Cart")}
const showHomepage = () => { changeScreen("Homepage")}
const onChangeType =(e)=>{setType(e.target.value); changeScreen("Homepage")}

    return(
        
        <section id="HEADER">
        <Background>
        <NavStyle>
        <a href="#HEADER"><button value="all" onClick={onChangeType}>Space Collection</button></a>
        <a href="#FILTER"><button value="allClothing" onClick={onChangeType}>Roupas</button></a>       
        <a href="#FILTER"><button value="allAcessories" onClick={onChangeType}>Acessórios</button></a>
        <a href="#FILTER"><button value="all" onClick={onChangeType}>Pesquisar</button></a>
        <button onClick={showCart}>Carrinho<p>{cont}</p></button>
        <button onClick={showHomepage} className="x">+</button>
        </NavStyle>
        </Background>
        <Filter id="FILTER"></Filter>
        </section>
    )
}