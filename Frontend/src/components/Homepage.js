import { useEffect, useState} from "react";
import {
    Link, useHistory 
} from "react-router-dom";
import Search from "./SearchBar";


function Homepage() {
    const [sports, setSports] = useState([])

    async function fetchSports() {
        const res = await fetch('/api/sport')
        const resBody = await res.json();
        setSports(resBody.sports)
        console.log(resBody.sports)
    }
    useEffect(() => {
        fetchSports()
    }, [])

    return (
        <>
            <Search />
            <h2>DESPORTOS</h2>
            <div>
                {
                    sports.map(sport => (
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
            <div>
                <Events />
            </div>
        </>
    )
}

function Events() {
    return (
        <div>
            <h2 >Eventos</h2>
        </div>
    )
}


export default Homepage;