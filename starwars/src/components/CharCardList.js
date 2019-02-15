import React from 'react';
import './StarWars.css';
// import CharCard from './CharCard';

function CharCardList(props) {
  return (
    <div className="cardList">{props.starwarsChars.map(char => {
      return (
        <div key={char.name} className="card">
          <h3>{char.name}</h3>
          <div>
            <ul>
              <li>Birth Year: {char.birth_year}</li>
              <li>Gender: {char.gender}</li>
              <li>Height: {char.height}</li>
              <li>Mass: {char.mass}</li>
              <li>Hair Color: {char.hair_color}</li>
              <li>Eye Color: {char.eye_color}</li>
            </ul>
            <img src={char.homeworld} alt=""/>
          </div>
        </div>
        );}
    )}</div>
  );
}

export default CharCardList;