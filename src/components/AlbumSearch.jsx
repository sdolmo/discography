var React = require('react');
var Album = require('./Album.jsx');

var AlbumSearch = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Search for Artist:</h3>
        <input onChange={this.props.onChange} value={this.props.searchTerm} placeholder="Artist..."/>
        <button onClick={this.props.handleSearch}>Hit it!</button>
      </div>
    );
  }

});

module.exports = AlbumSearch;
