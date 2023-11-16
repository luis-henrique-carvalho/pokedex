import React from 'react'
import PokemonCard from '../components/PokemonCard'
import usePokemonHook from '../hooks/usePokemonHook'
import Container from '../components/Container'


const Home = () => {
  const { page, pokemonData, setPage } = usePokemonHook()

  return (
    <Container>
      <h1 className="font-bold text-4xl mt-5">Meus pokemons</h1>
      <div className="flex flex-row justify-center flex-wrap md:flex-row gap-4 ">

        {pokemonData && pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}

      </div>
      <h1 className='text-4xl'>Pagina Atual: {page + 1}</h1>
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
    </Container >

  )
}

export default Home

