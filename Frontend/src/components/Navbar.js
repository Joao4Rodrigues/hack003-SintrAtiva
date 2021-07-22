import { BsFillHouseDoorFill } from "react-icons/bs";
import {
    Link
} from "react-router-dom";
import '../css/navbar.css';
import { MdEvent} from "react-icons/md";
import { MdFavorite} from "react-icons/md";

function NavBar() {

    return (
        <>
            <img height='100px' src='/SintrAtiva.png' />
            <div className='homeBar'>
                <button><MdFavorite size ={35}/>Favoritos</button>
                <Link to="/"><button ><BsFillHouseDoorFill  size ={35}/><br />Homepage</button></Link>
                <button><MdEvent size ={35}/>Eventos</button>
                
            </div>
        </>
    )
}



export default NavBar;