import {styled} from "styled-components";

export const Filtro = styled.section`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 30px;
    margin: 0 10%;
    height: 70px;

    label{
        display: flex;
        margin: 10px 0;
        height: 25px;
        border: 1px solid black;
        opacity: 0.7;
    }
    input{
        border: transparent;
    }
    .value{
        width: 100px;
    }
    .search{
        width: 300px;
    }
    button {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  border: 1px solid transparent;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
  opacity: 0.7;
}
`