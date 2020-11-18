import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemon } from "../../redux/actions/pokemonActions";
import Alert from "../layouts/Alert";
import Spinner from "../layouts/Spinner";

const PokemonPage = ({ match }) => {
  const pokemonList = useSelector((state) => state.pokemonList);
  const { pokemon, error } = pokemonList;

  const {
    sprites,
    id,
    name,
    types,
    height,
    weight,
    species,
    base_experience,
    abilities,
    stats,
  } = pokemon;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(match.params.name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.name]);

  if (error) {
    return <Alert />;
  }

  if (pokemon.length === 0) {
    return <Spinner />;
  } else
    return (
      <div className="container full-height flex">
        <div className=" pokemon-stats">
          <img
            src={sprites.other["official-artwork"].front_default}
            alt={name}
          />
          <table>
            <tbody>
              <tr>
                <th>№</th>
                <td>{id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>type</th>
                <td>
                  {types.map((type) => (
                    <Link
                      to={`/types/${type.type.name}`}
                      key={type.type.name}
                      className="type"
                    >
                      {type.type.name}
                    </Link>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Species</th>
                <td>{species.name}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{height} cm</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{weight} kg</td>
              </tr>
              <tr>
                <th>Base Experience</th>
                <td>{base_experience}</td>
              </tr>
              <tr>
                <th>Abilities</th>
                <td className="ability">
                  {abilities.map((ability) => (
                    <span key={ability.ability.name} className="ability-span">
                      {ability.ability.name}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Base Stats</th>
                <td>
                  {stats.map((stat) => (
                    <div key={stat.stat.name}>
                      <span className="stats">{stat.base_stat}</span> (
                      {stat.stat.name})
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PokemonPage;
