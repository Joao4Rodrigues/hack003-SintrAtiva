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
                <button className='navButtons'><MdFavorite size ={30}/><br />Favoritos</button>
                <Link to="/"><button className='navButtons'><BsFillHouseDoorFill  size ={30}/><br />Homepage</button></Link>
                <button className='navButtons'><MdEvent size ={30}/><br />Eventos</button>
                
            </div>
        </>
    )
}



export default NavBar;