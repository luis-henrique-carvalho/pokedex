import React, { useEffect, useState } from 'react'
import usePokemonHook from '../hooks/usePokemonHook'
import { useParams } from 'react-router-dom'
import PokemonCardFull from '../components/PokemonCardFull'

const PokemonPage = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const { getPokemonById } = usePokemonHook()

  const getPokemon = async () => {
    try {
      const response = await getPokemonById(id)
      setPokemon(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      {pokemon &&
        <PokemonCardFull pokemon={pokemon} />
      }
    </>
  )
}

export default PokemonPage