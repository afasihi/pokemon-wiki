import Axios from "axios";

export const cleanData = async (data) => {
  const response = data.map(async (pokemon) => {
    try {
      const walo = await Axios.get(pokemon.url);
      return walo.data;
    } catch (error) {
      console.log(error);
    }
  });
  const pokemons = await Promise.all(response).then((res) => res);

  const cleanObj = pokemons.map((pokemon) => ({
    image: pokemon.sprites.other["official-artwork"].front_default,
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map((type) => type.type.name),
    height: pokemon.height,
    weight: pokemon.weight,
    species: pokemon.species.name,
    baseExperience: pokemon.base_experience,
    abilities: pokemon.abilities.map((ability) => ability.ability.name),
    stats: pokemon.stats,
  }));
  return cleanObj;
};
