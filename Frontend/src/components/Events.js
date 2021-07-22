import React, { useState } from "react";
import Search from "./SearchBar";


function Events() {
    const [event, setEvent] = useState()

    return (
        <div>
            <Search />
            <h2>Eventos</h2>
        </div>
    )
}

export default Events;