import React from 'react';
import './StarWars.css';
import CharCard from './CharCard';

function CharCardList(props) {
  return (
    <div className="cardList">{props.starwarsChars.map(char => {
      return (
        <CharCard key={char.name} char={char}/>
        );}
    )}</div>
  );
}

export default CharCardList;