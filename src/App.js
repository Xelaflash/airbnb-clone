import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/app.css';
import Flat from './components/flat';

class App extends Component {
  render() {
    // TODO fetch some json
    const flat = {
      id: 145,
      name: 'Charm at the Steps of the Sacre Coeur/Montmartre',
      imageUrl:
        'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg',
      price: 164,
      priceCurrency: 'EUR',
      lat: 48.884211,
      lng: 2.34689,
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search" />
          <div className="flats">
            <Flat flat={flat} />
            <Flat flat={flat} />
          </div>
        </div>
        <div className="map" />
      </div>
    );
  }
}

export default App;
