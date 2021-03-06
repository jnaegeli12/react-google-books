import React from 'react';


function ResultsCard(props) {
    return (
        <div className="row">
            <div className="card w-100" key={props.id}>
                <div className="card-body">
                    <img src={props.image} alt="cover" />
                    <h3 className="card-text">{props.title}</h3>
                    <h4 className="card-text">{props.authors}</h4>
                    <p className="card-text">{props.description}</p>
                    <div className="d-flex w-100 justify-content-between">
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-outline-dark">More details</a>
                    <input onClick={props.onClick} readOnly value={props.value} className="btn btn-outline-dark" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard;