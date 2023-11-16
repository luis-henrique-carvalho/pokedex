/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

const usePokemonHook = () => {
  const [page, setPage] = useState(0);
  const [pokemonData, setPokemonData] = useState([]); // [1,2,3,4,5,6,7,8,9,10
 
  const getPokemonById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
  }

  const searchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    return data
  }

  const fetchPokemonsList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`);
    const data = await response.json();
    return data.results;
  }

  const fetchPokemon = async (url) => {
    const pokemon = await fetch(url)
    const data = await pokemon.json();
    return data;
  }

  const fetchPokemonData = async () => {
    try {
      // Primeira requisição
      const pokemonList = await fetchPokemonsList();

      const pokemonDataPromises = pokemonList.map((pokemon) =>
        fetchPokemon(pokemon.url)
      );

      const pokemonData = await Promise.all(pokemonDataPromises);

      setPokemonData(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error.message);
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [page])

  return { page, setPage, pokemonData, getPokemonById, searchPokemon }

}

export default usePokemonHook;