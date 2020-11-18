import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  return (
    <ul key={pokemon.name} className="card">
      <li>
        <img src={pokemon.image} className="pokemon-image" alt="pokemon" />
      </li>
      <li>{pokemon.id}</li>
      <li>
        <Link to={`/pokemon/${pokemon.name}`} className="pokemon-name">
          {pokemon.name}
        </Link>
      </li>
      <li>
        {pokemon.types.map((type) => (
          <Link key={type} to={`/types/${type}`} className="home-type">
            {type}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default Pokemon;
