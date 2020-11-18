import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/pokemonActions";
import Alert from "../layouts/Alert";
import Spinner from "../layouts/Spinner";
import Pokemon from "../shared/Pokemon";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const pokemonList = useSelector((state) => state.pokemonList);
  const { pokemons, loading, error } = pokemonList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filterSelected = pokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );
    setSelected(filterSelected);
  }, [search, pokemons]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  if (error) {
    return <Alert />;
  }

  if (loading || pokemons.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="container full-height">
      <div className="home-search">
        <p>Search for your favourite Pokemon!!</p>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Pokemon..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="flex">
        {selected.length > 0
          ? selected.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))
          : pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
