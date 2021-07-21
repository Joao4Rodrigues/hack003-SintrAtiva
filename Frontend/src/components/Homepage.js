import { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";

function Homepage({page}) {
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
            <img height='100px'src='/SintrAtiva.png' />
            <h2>DESPORTOS</h2>
            <div>
                {
                    sports.map(sport => (
                        <div
                            key={sport._id}
                        >
                           <button>{sport.name}</button>
                            
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default Homepage;