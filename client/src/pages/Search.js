import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import API from '../utils/API';
import ResultsCard from "../components/ResultsCard";

class Search extends Component {
  state = {
    books: [],
    query: "",
    message: "Search For A Book To Begin!"
  }

  refreshResults = () => {
    window.location.reload(false)
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      query: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchGoogle(this.state.query)
      .then(res => 
        this.setState({
          books: res.data.items,
          query: "",
          message: ""
        })
      ).catch(() => {
        this.setState({
          books: [],
          query: "",
          message: "No book found"
        })
      })
  };

  handleAddFavorite = id => {
    const book = this.state.books.find(book => book.id === id);

    API.addtoFavorites({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(
      this.refreshResults()
    )
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="text-center">
            <h2>Search for Books</h2>
          </div>
          <SearchBar
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            query={this.state.query}
            message={this.state.message} />
        </div>
        <ResultsContainer>
            {this.state.books.map(book => (
              <div>
                <ResultsCard
                  id={book._id}
                  googleId={book.id}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  link={book.volumeInfo.infoLink}
                  value="Add to Favorites"
                  onClick={() => this.handleAddFavorite(book.id)} />
              </div>
            ))}
        </ResultsContainer>
      </div>
    );
  }
}

export default Search;
