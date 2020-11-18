import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchData,
  filteredPokemons,
} from "../../redux/actions/pokemonActions";
import Alert from "../layouts/Alert";
import Spinner from "../layouts/Spinner";

const TypesPage = ({ match }) => {
  const pokemonList = useSelector((state) => state.pokemonList);
  const { filtered, pokemons, loading, error } = pokemonList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchData());
    }
    if (pokemons.length > 0) {
      dispatch(filteredPokemons(match.params.type));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.type, pokemons]);

  if (error) {
    return <Alert />;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container types-page full-height">
      {filtered.map((pokemon) => (
        <div key={pokemon.id} className=" types-filtered">
          <div>
            <img src={pokemon.image} className="types-image" alt="" />
          </div>
          <div className="flex-types">
            <Link to={`/pokemon/${pokemon.name}`} className="types-name">
              {pokemon.name}
            </Link>
            <div className="types-experience">
              <div style={{ marginRight: "0.3rem" }}>Base Experience</div>
              <div className="green">{pokemon.baseExperience}</div>
            </div>
          </div>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type} className="types-type">
                <Link to={`/types/${type}`} className="type">
                  {type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      ;
    </div>
  );
};

export default TypesPage;
