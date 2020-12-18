import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <form className="form-inline center">
            {/* <i class="fas fa-book-open"></i> */}
                <input 
                    onChange={props.handleInputChange}
                    value={props.query}
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search for a book" 
                    aria-label="Search" />
                <button 
                    onClick={props.handleFormSubmit}
                    className="btn btn-outline-success my-2 my-sm-0" 
                    type="submit">Search</button>
            </form>
            <div className="text-center">
                <h4><br />{props.message}</h4>
            </div>
        </div>
    )
}

export default SearchBar;