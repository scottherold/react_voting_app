import React from 'react';

// Creates default block for voting

const Vote = (props) => {
    return (
        <div className="row justify-content-center border border-dark">
            <div className="col-1 text-center border border-dark rounded-circle m-2">
                <h5 className="align-self-middle my-2">{props.num}</h5>
            </div>
            <div className="col-8 justify-content-center my-3 ">
                <h5 className="text-center">{props.framework}</h5>
            </div>
            <div className="col-1 justify-content-center m-2 ">
                <img style={{width:50, height:50}} src="./images/plus.png" alt="Vote Yes" 
                    onClick={() => alert("You voted for " + props.framework)}></img>
            </div>
        </div>
    )
}

// Allows vote to be used in other JS modules
export default Vote;