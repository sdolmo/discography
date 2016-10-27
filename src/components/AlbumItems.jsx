var React = require('react');

var AlbumItems = React.createClass({
  render: function() {
    return (
      <li>
        <h1>{this.props.albumTitle}</h1>
        <img src={this.props.albumImage} />
      </li>
    );
  }
});

module.exports = AlbumItems;
