import { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";

function Homepage() {
    const [sports, setSports] = useState([])

    async function fetchSports() {
        const res = await fetch('/api/sports')
        const resBody = await res.json();
        setSports(resBody.sports)
    }
    useEffect(() => {
        fetchSports()
    }, [])

    return (
        <>
            <img height='100px'src='/SintrAtiva.png' />
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
        </>
    )
}


export default Homepage;