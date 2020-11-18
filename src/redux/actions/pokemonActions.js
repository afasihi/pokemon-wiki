import Axios from "axios";
import { cleanData } from "../../utile";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  GET_POKEMON_SUCCESS,
  FILTERED_POKEMONS,
} from "../types";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });
    const {
      data: { results },
    } = await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=60");

    const pokemons = await cleanData(results);

    dispatch({ type: FETCH_DATA_SUCCESS, payload: pokemons });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAIL, payload: error });
  }
};

export const getPokemon = (name) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });
    const { data } = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    dispatch({ type: GET_POKEMON_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAIL, payload: error });
  }
};

export const filteredPokemons = (type) => (dispatch) => {
  dispatch({ type: FILTERED_POKEMONS, payload: type });
};
