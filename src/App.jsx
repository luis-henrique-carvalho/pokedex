/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";


function App() {
  const [page, setPage] = useState(0);
  const [pokemonData, setPokemonData] = useState([]); // [1,2,3,4,5,6,7,8,9,10

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

  return (
    <div className="flex flex-col items-center container mx-auto gap-5">
      <h1 className="font-bold text-4xl mt-5">Meus pokemons</h1>
      <div className="flex flex-col justify-center flex-wrap md:flex-row gap-4">

        {pokemonData && pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}

      </div>
      <h1 className='text-4xl'>Pagina Atual: {page}</h1>
      <div className='flex flex-row items-center gap-2'>
        {page <= 0 ? null : (
          <button className='py-4 px-2 text-white text-lg  w-[200px] bg-slate-600'
            onClick={() => setPage(page - 1)}
          > Pagina Anterior
          </button>
        )}

        <button className='py-4 px-2 text-white  text-lg w-[200px] bg-slate-600'
          onClick={() => setPage(page + 1)}
        >Proxima pagina
        </button>
      </div>
    </div>
  )
}

export default App;
