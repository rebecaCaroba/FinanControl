import { SearchFormContainer } from "./style";
import { FiSearch } from "react-icons/fi";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações"/>
            <button type="submit">
                <FiSearch size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}