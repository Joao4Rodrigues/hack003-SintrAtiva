import React from 'react';
import Homepage from './components/Homepage';
import Sports from './components/sports';

class OurApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            component: 'home',
        }
    }

    render() {
        if (this.state.component === 'home') {
            return (
                <div>
                    <Homepage changeComponent={() => this.setState({
                    component: 'sports'
                    })}/>
                </div>
            )
        } else if (this.state.component === 'sports'){
            return (
                <div>
                    <Sports changeComponent={() => this.setState({
                    component: 'home'
                    })}/>
                </div>
            )
        }
    }
}

export default OurApp;