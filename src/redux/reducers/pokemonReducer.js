import {
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  GET_POKEMON_SUCCESS,
  FILTERED_POKEMONS,
} from "../types";

const intialStat = {
  pokemons: [],
  pokemon: [],
  loading: false,
  error: null,
  filtered: [],
};

const pokemonReducer = (state = intialStat, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case FILTERED_POKEMONS:
      return {
        ...state,
        filtered: state.pokemons.filter((pokemon) =>
          pokemon.types.includes(action.payload) ? pokemon : false
        ),
      };

    default:
      return state;
  }
};

export default pokemonReducer;
