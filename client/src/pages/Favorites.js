import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Saved() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  function loadFavorites() {
    API.getFavorites()
      .then(res => {
        console.log(res.data)
        setFavorites(res.data)
      })
      .catch(err => console.log(err));
  }

  // handleRemove = id => {

  // }

  return (
    <div>
        <div className="container-fluid">
          <div className="text-center">
            <h2>Your Favorites</h2>
            <div className="row">
            {favorites.map(favorite => {
              return (
            <div className="card w-100" key={favorite.id}>
                <div className="card-body">
                    <img src={favorite.image} alt="cover" />
                    <small>ISBN: {favorite.isbn}</small>
                    <h3 className="card-text">{favorite.title}</h3>
                    <h4 className="card-text">{favorite.authors}</h4>
                    <div className="d-flex w-100 justify-content-between">
                    <a href={favorite.link} target="_blank" rel="noreferrer" className="btn btn-outline-dark">More details</a>
                    <button onClick={favorite.handleRemove} className="btn btn-outline-dark">Remove from Favorites</button>
                    </div>
                </div>
            </div>
              )
            })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Saved;