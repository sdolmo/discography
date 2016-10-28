var React = require('react');
var AlbumSearch = require('./AlbumSearch.jsx');
var Album = require('./Album.jsx');


var AppManager = React.createClass({
  getInitialState: function() {
    return {albums: [], searchTerm: ''};
  },

  handleSearch: function(e) {
    e.preventDefault();

    $.get("https://api.spotify.com/v1/search?query=" + this.state.searchTerm + "&offset=0&limit=20&type=album", (data) => {
      let searchResults = data.albums.items;
      this.setState({albums: searchResults, searchTerm: ''});
    });
  },

  onChange: function(e) {
    this.setState({searchTerm: e.target.value});
  },

  render: function() {

    var styles = {
      center: {
        textAlign: "center",
        position: "relative",
        top: 100
      },

      left: {
        marginLeft: 10
      },

      space: {
        width: 200
      },

      height: {
        height: 300
      }
    }

    return (
      <div>
        <h1>Discography</h1>
        <div style={styles.height} className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div style={styles.center}>
              <div>
                <h3>Search for Artist:</h3>
              </div>
              <form onSubmit={this.handleSearch} className="form-inline">
                <div className="row">
                    <input style={styles.space} onChange={this.onChange} value={this.state.searchTerm} className="form-control" placeholder="Artist Name..."/>

                    <button style={styles.left} className="btn btn-default">Hit it!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <Album albums={this.state.albums} />
        </div>
      </div>
    );
  }

});

module.exports = AppManager;
