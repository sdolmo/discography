var Fetch = require('whatwg-fetch');
var baseUrl = "https://api.spotify.com/v1/search?query=";
var extended = "&offset=0&limit=20&type=album"

var service = {
  get: function(query){
    return fetch(baseUrl + query + extended)
    .then(function(response){
      return response.json();
    });
  }
};

module.exports = service;
