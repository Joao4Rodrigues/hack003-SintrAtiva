import React, { useEffect, useState } from 'react'
import {
    Link,
    useParams,
    useLocation
} from "react-router-dom";
import queryString from "query-string"
import Search from "./SearchBar";


function SearchResults() {
    const location = useLocation()
    const params = useParams()
    const [results, setResults] = useState({ sports : []})

    const query = queryString.parse(location.search)
    console.log(location, params, query)
    
    async function fetchSearch(text) {
        const res = await fetch(`/api/search?search=${text}`)
        const resBody = await res.json();
        console.log('what', resBody)
        setResults(resBody)
    }

    useEffect(() => {
        fetchSearch(query.search)
    }, [query.search])

    return (
        <>
        <Search />
        <h3>Resultados da pesquisa</h3>
            <div >
         {results.sports.length === 0 && <span >Não foram encontrados resultados</span> }  
            { 
                results.sports && results.sports.map(sport => (
                    <div 
                        key={sport._id}
                    >
                        <Link to={`/sports/${sport._id}`}>
                        <button>{sport.name}</button>
                        </Link>
                    </div>
                )) 
            }
            </div>
        </>
    )
}

export default SearchResults;