var React = require('react');
var Album = require('./Album.jsx');

var AlbumSearch = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Search for Artist:</h1>
        <input onChange={this.props.updateInput} placeholder="Artist..."/>
        <button onClick={this.props.handleSearch}>Hit it!</button>
      </div>
    );
  }
});

module.exports = AlbumSearch;
