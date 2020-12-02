import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className="btn btn-outline-dark">Add to Favorites</button>
    )
}

export default Button;