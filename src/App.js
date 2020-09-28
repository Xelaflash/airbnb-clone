import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/app.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: '',
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data,
        });
      });
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat,
    });
  };

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) =>
        new RegExp(event.target.value, 'i').exec(flat.name)
      ),
    });
  };

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522,
    };

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng,
      };
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="flats">
            {this.state.flats.map((flat, index) => (
              <Flat flat={flat} key={index} selectFlat={this.selectFlat} />
            ))}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP}` }}
            center={center}
            defaultZoom={11}
          >
            {this.state.flats.map((flat, index) => (
              <Marker
                lat={flat.lat}
                lng={flat.lng}
                text={`${flat.price} ${flat.priceCurrency}`}
                key={index}
                selected={flat === this.state.selectedFlat}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
