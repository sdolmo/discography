var React = require('react');

var AlbumItems = React.createClass({
  render: function() {

    return (
        <li>
          <h4>{this.props.albumTitle}</h4>
          <img src={this.props.albumImage} />
        </li>
    );
  }
});

module.exports = AlbumItems;
