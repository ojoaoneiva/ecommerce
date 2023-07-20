import { useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import { HomeStyle } from "./HomeStyle"

export const Home = ({ productsFiltered, addProduct, setCont }) => {
    const [ordination, setOrdination] = useState("")
    const onChangeOrdination = (e) => { setOrdination(e.target.value) }
    return (
        <HomeStyle>
            <div>
                <p>Quantidade de produtos: {productsFiltered.length}</p>
                <label> Ordenar por preço
                    <select value={ordination} onChange={onChangeOrdination}>
                        <option value={"crescente"}>Crescente</option>
                        <option value={"decrescente"}>Decrescente</option>
                    </select>
                </label>
            </div>
            {productsFiltered
                .sort((a, b) => { if (ordination === "crescente") { return a.value > b.value ? 1 : -1 } else if (ordination === "decrescente") { return a.value > b.value ? -1 : 1 } })
                .map((product, indice) => { return <ProductCard key={indice} product={product} addProduct={addProduct} /> })}
        </HomeStyle>
    )
}