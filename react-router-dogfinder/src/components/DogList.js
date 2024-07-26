import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h1>Meet our dogs!</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} />
              <h2>{dog.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;