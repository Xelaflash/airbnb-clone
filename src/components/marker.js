import React, { Component } from 'react';
import '../stylesheets/marker.css';

class Marker extends Component {
  render() {
    let classes = 'marker';
    if (this.props.selected) {
      classes += ' selected';
    }

    return <div className={classes}>{this.props.text}</div>;
  }
}

export default Marker;
