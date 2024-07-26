import React from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to Dogs</Link>
    </div>
  );
}

export default DogDetails;