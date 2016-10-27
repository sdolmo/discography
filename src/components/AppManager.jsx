var React = require('react');
var AlbumSearch = require('./AlbumSearch.jsx');
var Album = require('./Album.jsx');


var AppManager = React.createClass({
  getInitialState: function() {
    return {albums: [], searchTerm: ''};
  },

  handleSearch: function() {
    $.get("https://api.spotify.com/v1/search?query=" + this.state.searchTerm + "&offset=0&limit=20&type=album", (data) => {
      let searchResults = data.albums.items;
      this.setState({albums: searchResults});
    })
  },

  updateInput: function(e) {
    var updatedSearchTerm = e.target.value;
    this.setState({searchTerm: updatedSearchTerm});
  },

  render: function() {
    return (
      <div>
        <AlbumSearch handleSearch={this.handleSearch} updateInput={this.updateInput} />
        <Album albums={this.state.albums} />
      </div>
    );
  }

});

module.exports = AppManager;
