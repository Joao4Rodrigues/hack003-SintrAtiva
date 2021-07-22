import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Search from "./SearchBar";
import { BiListPlus } from "@react-icons/all-files/bi/BiListPlus";
import "../css/events.css"
import "../css/homepage.css"

function Event() {
    const params = useParams();
    const [event, setEvent] = useState(false)
    const [erro, setErro] = useState("")
    const fetchEvent = async (id) => {
        if(!id) return
        try{
            const res = await fetch(`/api/${params.id}/events/`)
            if(res.status === 200){
               const resBody = await res.json();
            setEvent(resBody.event) 
            console.log(resBody.event)
            setErro("")
        } else {
          setErro('Ocorreu um erro: ' + res.statusText)
        }
            
        }catch(err){

        }
        
    }
    useEffect(() => {
        fetchEvent(params.id)
    }, [params])

     return (
         <div className='eventsBackground' style={{backgroundImage: 'url(calendar.jpeg)'}}>
            <Search />
            <h2></h2><button className='addToCalendar'><BiListPlus size={45} /><br />Adicionar à agenda</button>
            {
                        <div
                            key={event._id}
                        >
                            <h4>{event.event}</h4>
                           <img className='eventIMG' width='300px' src={event.image} />
                           <h5>{event.date}</h5>
                           <p>{event.info}</p>
                        </div>
                }
        </div>
    )

   
}

export default Event;