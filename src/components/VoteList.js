import React from 'react';
import Vote from './Vote';

// Creates list of frameworks to vote for
const VoteList = (props) => {
    return(
        <div className="row justify-content-center">
            <div className="col-4 text-center mt-5 border border-dark rounded">
                <Vote num="15" framework="React" />
                <Vote num="12" framework="Vue" />
                <Vote num="9" framework="Angular" />
                <Vote num="3" framework="Ember" />
            </div>
        </div>
    )
}

// Exports the VoteList to be used in other .js files
export default VoteList