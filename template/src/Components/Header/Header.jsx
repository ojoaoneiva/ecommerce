import { NavStyle, Img, Img2, Div, NavBackground, Filter } from "./HeaderStyled"
import image1 from "../../assets/Images/mulher-pensativa-de-cabelo-encaracolado2.jpg"
import image2 from "../../assets/Images/retrato-analogico-de-homem-bonito-posando-artisticamente-ao-ar-livre.jpg"

export const Header = ({changeScreen,cont,type, setType})=>{
const showCart = () => { changeScreen("Cart")}
const showHomepage = () => { changeScreen("Homepage")}
const onChangeType =(e)=>{setType(e.target.value)}

    return(
        <section id="HEADER">
        <NavStyle>
        <a href="#HEADER"><button value="all" onClick={onChangeType}>Space Collection</button></a>
        <a href="#FILTER"><button value="allClothing" onClick={onChangeType}>Roupas</button></a>       
        <a href="#FILTER"><button value="allAcessories" onClick={onChangeType}>Acessórios</button></a>
        <a href="#FILTER"><button value="all" onClick={onChangeType}>Pesquisar</button></a>
        {/* <button>Login</button> */}
        <button onClick={showCart}>Carrinho<p>{cont}</p></button>
        </NavStyle>
        <Div>
        <Div>
        <Img src={image1}/>
        </Div>
        <Div>
        <Img2 src={image2}/>
        </Div>
         </Div>
         <NavBackground/><NavBackground/>
         <Filter id="FILTER"></Filter>
        </section>
    )
}