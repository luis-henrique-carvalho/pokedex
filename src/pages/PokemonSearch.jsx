import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import usePokemonHook from '../hooks/usePokemonHook'
import Container from '../components/Container'
import PokemonCardFull from '../components/PokemonCardFull'

const PokemonSearch = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const { searchPokemon } = usePokemonHook()

  const fetchSearchPokemon = async () => {
    try {
      const response = await searchPokemon(name)
      setPokemon(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSearchPokemon()
  }, [name])

  return (
    <Container>
      
      {pokemon ? <PokemonCardFull pokemon={pokemon} /> :
        <h1 className='text-3xl text-red-500 font-bold'>
          Pokemon {name} não encontrado
        </h1>}

    </Container>
  )
}

export default PokemonSearch

