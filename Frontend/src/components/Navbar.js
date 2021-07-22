import { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import '../css/navbar.css';

function NavBar() {

    return (
        <>
            <img height='100px' src='/SintrAtiva.png' />
            <div>
                <Link to="/"><button className='homeButton'><BsFillHouseDoorFill className='homeIcon' /><br />Homepage</button></Link>
            </div>
        </>
    )
}



export default NavBar;