import React from 'react';

// Creates default block for voting

// This component class allows for the use of 'state'
class Vote extends React.Component {

    // Since this is a class object, the constructor() method allows the injection of props into the class object
    constructor(props) {

        // Super passes the argument ot the parent class
        super(props);

        // This is where you define the state object. Using 'this' to reference the particular instance of the class generated
        // You can have ANY number of key-value pairs in your state object
        this.state = {
            counter: 0
        };
    };

    // all class components will have a render() method that will return an element
    render() {
        return (
            <div className="row justify-content-center border border-dark">
                <div className="col-1 text-cetner border border-dark rounded-circle m-2">
                    <h5 className="align-self-middle my-2">{this.state.counter}</h5>
                </div>
                <div className="col-8 justify-content-center my-3">
                    <h5 className="text-center">{this.props.framework}</h5>
                </div>
                <div className="col-1 justify-content-center m-2">
                    <img style={{width:50, height:50}} src="./images/plus.png" alt="Vote Yes" 
                        onClick={() => alert("You voted for " + this.props.framework)} 
                        onClick={() => this.setState((prevState) => ({
                            counter: prevState.counter + 1
                        }))}></img>
                </div>
            </div>
        );
    };
};

// Allows vote to be used in other JS modules
export default Vote;