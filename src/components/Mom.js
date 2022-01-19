import React, {component} from 'react'
import { Component } from 'react/cjs/react.production.min'
import Kid from './Kid'

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

    answerKid = () =>{
        this.setState({
            kidMsg : "D'accord Maman"
        })
    }

    render() {
        return(
            <div>
                <h1>Mommy</h1>
                <button onClick={this.orderMom}>Ordre de la mère</button>
                <p>{this.state.momMsg}</p>
                <hr/>

                <Kid name="Bernie" kidAnswer={this.answerKid} leState={this.state}/>

            </div>
        )
    }
}


export default Mom