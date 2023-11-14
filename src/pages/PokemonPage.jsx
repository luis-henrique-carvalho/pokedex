import React from 'react'
import PokemonCard from '../components/PokemonCard'
import usePokemonHook from '../hooks/usePokemonHook'

const PokemonPage = () => {
  const { pokemon } = usePokemonHook()

  return (
    <>
      {pokemon && <div>
        <PokemonCard pokemon={pokemon} />
      </div>}
    </>
  )
}

export default PokemonPage