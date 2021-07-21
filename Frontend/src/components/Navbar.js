import { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";

function NavBar({page}) {
    
    return (
        <>
            <img height='100px'src='/SintrAtiva.png' />
           <div>
               <Link to="/"><button><BsFillHouseDoorFill /></button></Link>
               </div> 
        </>
    )
}



export default NavBar;