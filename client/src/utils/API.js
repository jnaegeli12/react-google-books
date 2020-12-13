import axios from 'axios';

const API = {
    searchGoogle: function(input) {
        let queryString = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAIY4R3KJo33zPFCjFeSoMxrFgHZBHiuw4&q=' + input;
        return axios.get(queryString);
    },
    getFavorites: function() {
        console.log("this is the API");
        return axios.get('/api/books');
    },
    addtoFavorites: function(postData) {
        return axios.post('api/books', postData);
    },
    removeFavorites: function(id) {
        return axios.delete('api/books/' + id);
    }
}

export default API;