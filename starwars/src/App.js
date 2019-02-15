import React, { Component } from 'react';
import './App.css';

import CharCardList from './components/CharCardList.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsChars2: [{
        birth_year: "19BBy",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        eye_color: "blue",
        films: ["https://swapi.co/api/films/2/",
               "https://swapi.co/api/films/6/",
               "https://swapi.co/api/films/3/",
               "https://swapi.co/api/films/1/",
               "https://swapi.co/api/films/7/"],
        gender: "male",
        hair_color: "blond",
        height: "172",
        homeworld: "https://swapi.co/api/planets/1/",
        mass: "77",
        name: "Luke Skywalker",
        skin_color: "fair",
        species: ["https://swapi.co/api/species/1/"],
        starships: ["https://swapi.co/api/starships/12/",
                  "https://swapi.co/api/starships/22/"],
        url: "https://swapi.co/api/people/1/",
        vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
      },
        {
          birth_year: "19BBy",
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          eye_color: "blue",
          films: ["https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"],
          gender: "female",
          hair_color: "blond",
          height: "172",
          homeworld: "https://swapi.co/api/planets/1/",
          mass: "77",
          name: "Leia Skywalker",
          skin_color: "fair",
          species: ["https://swapi.co/api/species/1/"],
          starships: ["https://swapi.co/api/starships/12/",
            "https://swapi.co/api/starships/22/"],
          url: "https://swapi.co/api/people/1/",
          vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
        }
    ]
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };t

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharCardList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
