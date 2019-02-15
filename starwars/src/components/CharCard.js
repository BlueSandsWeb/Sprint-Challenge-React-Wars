import React from 'react';
import './StarWars.css';

function CharCard(props) {
  return (
    <div className="card">
      <h3>{props.char.name}</h3>
      <div className="char-stats-section">
        <ul>
          <li>Birth Year: {props.char.birth_year}</li>
          <li>Gender: {props.char.gender}</li>
          <li>Height: {props.char.height}</li>
          <li>Mass: {props.char.mass}</li>
          <li>Hair Color: {props.char.hair_color}</li>
          <li>Eye Color: {props.char.eye_color}</li>
        </ul>
        <img src={props.char.homeworld} alt="" />
      </div>
    </div>
  );
}

export default CharCard;