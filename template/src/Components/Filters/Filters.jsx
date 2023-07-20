import { Filtro } from "./FiltersStyle"
import searchImage from "../../assets/Images/icons/search.png"

export const Filter = ({ minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter }) => {

    const onChangeSearchFilter = (e) => { setSearchFilter(e.target.value) }
    const onChangeMinFilter = (e) => { setMinFilter(e.target.value) }
    const onChangeMaxFilter = (e) => { setMaxFilter(e.target.value) }

    return (
        <Filtro>
            <h2>Produtos</h2>
            <label>
                <input value={searchFilter} placeholder=" Buscar" className="search" onChange={onChangeSearchFilter} />
                <button type="submit"> <img src={searchImage} /> </button>
            </label>
            <label>
                <input value={minFilter} placeholder=" Valor mínimo" className="value" onChange={onChangeMinFilter} />
            </label>
            <label>
                <input value={maxFilter} placeholder=" Valor máximo" className="value" onChange={onChangeMaxFilter} />
            </label>
        </Filtro>
    )
}