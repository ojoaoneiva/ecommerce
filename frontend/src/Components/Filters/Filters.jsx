import { Container } from "./FiltersStyle"
import searchImage from "../../assets/search.png"

export const Filter = ({ minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter }) => {

    const onChangeSearchFilter = (e) => { setSearchFilter(e.target.value) }
    const onChangeMinFilter = (e) => { setMinFilter(e.target.value) }
    const onChangeMaxFilter = (e) => { setMaxFilter(e.target.value) }

    return (
        <Container>
            <h2>Products</h2>
            <label>
                <input value={searchFilter} placeholder="Search" className="search" onChange={onChangeSearchFilter} />
                <button type="submit"> <img src={searchImage} /> </button>
            </label>
            <label>
                <input value={minFilter} placeholder="Minimum value" className="value" onChange={onChangeMinFilter} />
            </label>
            <label>
                <input value={maxFilter} placeholder="Maximum value" className="value" onChange={onChangeMaxFilter} />
            </label>
        </Container>
    )
}