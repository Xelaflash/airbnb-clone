import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/app.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          flats: data,
        });
      });
  }

  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522,
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search" />
          <div className="flats">
            {this.state.flats.map((flat, index) => (
              <Flat flat={flat} key={index} />
            ))}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP}` }}
            center={center}
            defaultZoom={11}
          />
        </div>
      </div>
    );
  }
}

export default App;
