import { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import "../css/homepage.css"
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
        <div className='homeContainer' >
            <h2 className='SportsTitle'>Desportos</h2>
            <div className="sports-sector" style={{backgroundImage: 'url(runner.jpeg)'}}>
                
                <div className="sports-sections">
                    {
                        sports.map(sport => (
                            <Link to={`/sports/${sport._id}`}>
                                <button className="sport-btn">{sport.name}</button>
                            </Link>

                        ))
                    }
                </div>

            </div>
            {/* <div className="event-section">
                
            </div> */}
        </div><Events />
        </>
    )
}


function Events() {
    const [events, setEvents] = useState([])
    async function fetchEvents() {
        const res = await fetch('/api/events')
        const resBody = await res.json();
        setEvents(resBody.events)
        console.log(resBody.events)
    }
    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div className='eventsGeneral'>
            <h2 className='eventsTitle'>Eventos</h2>
            <div >
                {
                    events.map(event => (
                        <div className='eventMapping'
                            key={event._id}
                        >
                            <h4>{event.event}</h4>
                            <h5>{event.date}</h5>
                            <Link to={`/events/${event._id}`}>
                                <img className='eventIMG' width='300px' src={event.image} />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}


export default Homepage;