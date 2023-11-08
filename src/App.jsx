/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]); // [1,2,3,4,5,6,7,8,9,10

  const fetchPokemons = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`);
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    console.log("FEZ OUTRA REQUISIÇÃO PRA API DO POKEMON")
    fetchPokemons()
    console.log(pokemonList)
  }, [page])

  return (
    <div className="flex flex-col items-center container mx-auto gap-5">
      <h1 className="font-bold text-4xl mt-5">Meus pokemons</h1>
      <div className="flex flex-col justify-center flex-wrap md:flex-row gap-4">

        {pokemonList.map((pokemon) => (
          <h1>{pokemon.name}</h1>
        ))}
      </div>
      <h1 className='text-4xl'>Pagina Atual: {page}</h1>
      <div className='flex flex-row items-center gap-2'>

        <button className='py-4 px-2 text-white text-lg  w-[200px] bg-slate-600'
          onClick={() => setPage(page - 1)}
        > Pagina Anterior
        </button>
        <button className='py-4 px-2 text-white  text-lg w-[200px] bg-slate-600'
          onClick={() => setPage(page + 1)}
        >Proxima pagina
        </button>

      </div>
    </div>
  )
}

export default App;
