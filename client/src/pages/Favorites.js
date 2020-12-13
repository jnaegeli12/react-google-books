import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ResultsContainer from "../components/ResultsContainer";
import ResultsCard from "../components/ResultsCard";

function Saved() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  function loadFavorites() {
    API.getFavorites()
      .then(res => {
        console.log(res.data);
        setFavorites(res.data)
      })
      .catch(err => console.log(err));
  };

  function refreshResults() {
    window.location.reload(false)
  }

  function handleRemove(id) {
    const book = favorites.find(favorite => favorite._id === id);
    console.log(book._id);
    API.removeFavorites(book._id);
    refreshResults();
  };

  return (
    <div>
        <div className="container-fluid">
          <div className="text-center">
            <h2>Your Favorites</h2>
          </div>
          <ResultsContainer>
            {favorites.map(favorite => (
                <div>
                <ResultsCard
                  id={favorite._id}
                  googleId={favorite.googleId} 
                  image={favorite.image}
                  title={favorite.title}
                  authors={favorite.authors}
                  description={favorite.description}
                  link={favorite.link}
                  value="Remove from Favorites"
                  onClick={() => handleRemove(favorite._id)}
                />
              </div>
              )
            )}
          </ResultsContainer>
        </div>
    </div>
  );
}

export default Saved;

// <div className="card w-100" key={favorite.id}>
//     <div className="card-body">
//         <img src={favorite.image} alt="cover" />
//         <h3 className="card-text">{favorite.title}</h3>
//         <h4 className="card-text">{favorite.authors}</h4>
//         <p className="card-text">{favorite.description}</p>
//         <div className="d-flex w-100 justify-content-between">
//         <a href={favorite.link} target="_blank" rel="noreferrer" className="btn btn-outline-dark">More details</a>
//         <button onClick={favorite.handleRemove} className="btn btn-outline-dark">Remove from Favorites</button>
//         </div>
//     </div>
// </div>