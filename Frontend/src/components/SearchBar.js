import { useState} from "react";
import {
 useHistory 
} from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

function Search() {
    const history = useHistory()
    const [search, setSearch] = useState([])
    const [text, setText] = useState("")

    async function fetchSearch(text) {
        const res = await fetch(`/api/search?search=${text}`)
        const resBody = await res.json();
        console.log(resBody)
        setSearch(resBody)
    }

    function onInputChange(event) {
        setText(event.target.value)
    }

    function onSearch() {
        history.push(`/search?search=${text}`)
    }

    const handleKeyEnter = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div>
            <input
                onKeyPress={handleKeyEnter}
                type="text"
                id="search"
                value={text}
                onChange={onInputChange}
                placeholder="Desporto"
            />
            <button onClick={onSearch}><BiSearchAlt2 /></button>
        </div>

    )

}
 export default Search;