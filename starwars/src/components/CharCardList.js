import React from 'react';
import './StarWars.css';
// import CharCard from './CharCard';

function CharCardList(props) {
  return (
    <div>{props.starwarsChars.map(char =>
      <li key={char.name}>{char.name}</li>
    )}</div>
  );
}

export default CharCardList;