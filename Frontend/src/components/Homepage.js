import React from 'react';
import './stylessheet.css';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img height='100px'src='/SintrAtiva.png' />
                <div className='mainButtons'>
                    <div>
                        <button onClick={this.props.changeComponent} className='sports'><GiIcons.GiVolleyballBall className='iconVB'/><br />Vóleibol</button>
                        <button onClick={this.props.changeComponent} className='sports'><IoIcons.IoMdFootball className='iconFB'/><br />Futebol</button>
                    </div>
                    <div>
                        <button onClick={this.props.changeComponent} className='sports'><GiIcons.GiBasketballBall className='iconBB'/><br />Basquetebol</button>
                        <button onClick={this.props.changeComponent} className='sports'><IoIcons.IoIosTennisball className='iconTN'/><br />Ténis</button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className='events'>
                    <fieldset style={{width: 3}}>quadrado dos eventos aqui</fieldset>
                    <button>+ eventos</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <button className='homeButton'><AiIcons.AiFillHome className='homepage'/><br />Homepage</button>
                    
                </div>
            </div>


        )
    }
}

export default Homepage;