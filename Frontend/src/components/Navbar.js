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
            <div>
                <button><MdFavorite size ={35}/></button>
                <Link to="/"><button className='homeButton'><BsFillHouseDoorFill className='homeIcon' /><br />Homepage</button></Link>
                <button><MdEvent size ={35}/></button>
                
            </div>
        </>
    )
}



export default NavBar;