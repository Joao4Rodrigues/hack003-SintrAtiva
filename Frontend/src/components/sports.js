import React from "react";
import './stylessheet.css';
import * as AiIcons from 'react-icons/ai';

class Sports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img height='100px'src='/SintrAtiva.png' />
                <div>
                    <button onClick={this.props.changeComponent} className='homeButton'><AiIcons.AiFillHome className='homepage' /><br />Homepage</button>

                </div>
            </div>

        )
    }
}

export default Sports;