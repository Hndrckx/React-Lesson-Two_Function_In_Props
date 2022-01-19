import React from "react";

let Kid = (props) => {

let btnPop = props.leState.momMsg !== null ? (<button onClick={props.kidAnswer}>Réponse</button>) : (<button disabled>Réponse</button>)

    return(
        <div>
            <h2>{props.name}</h2>
            {btnPop}
            <p>{props.leState.kidMsg}</p>
        </div>
    )
}

export default Kid