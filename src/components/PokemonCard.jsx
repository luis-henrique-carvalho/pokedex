import React from 'react'

const PokemonCard = ({ pokemon }) => {
    return (
        <div className='flex flex-col items-center w-1/4 bg-slate-200 rounded-2xl'>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className='max-w-[200px]'
            />
            <h1 className='font-semibold'>{pokemon.name}</h1>
            <p>{pokemon.type}</p>
        </div>
    )
}

export default PokemonCard