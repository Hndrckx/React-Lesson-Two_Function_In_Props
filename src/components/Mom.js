import React, {component} from 'react'
import { Component } from 'react/cjs/react.production.min';

class Mom extends Component{
    state={
        momMsg : null,
        kidMsg : null
    }

    orderMom = () => {
        this.setState({
            momMsg : 'Va ranger ta chambre'
        })
    }

    render() {
        return(
            <div>
                <h1>Mommy</h1>
                <button onClick={this.orderMom}>Ordre de la mère</button>
                <p>{this.state.momMsg}</p>
                <hr/>
            </div>
        )
    }
}


export default Mom