var React = require('react');
var AlbumItems = require('./AlbumItems.jsx');

var Album = React.createClass({
  render: function() {

    var containerStyle = {
      textAlign: "center"
    }

    var createItem = function(album, index){
      if (album.album_type === "album") {
        return <AlbumItems key={index + album} albumImage={album.images[1].url} albumTitle={album.name} />
      }
    };

    return (
      <div style={containerStyle}>
        <ul>{this.props.albums.map(createItem)}</ul>
      </div>
    );
  }
});

module.exports = Album;
