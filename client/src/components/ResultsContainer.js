import React from 'react';

function ResultsContainer(props) {
    return (
        <div className="container">
            <h2>Search Results</h2>
            {props.children}
        </div>
    )
}

export default ResultsContainer;