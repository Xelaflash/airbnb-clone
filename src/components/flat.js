import React, { Component } from 'react';
import '../stylesheets/flat.css';

class Flat extends Component {
  render() {
    const title = `${this.props.flat.price}${this.props.flat.priceCurrency} - ${this.props.flat.name}`;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default Flat;
