import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`} className='flex flex-col items-center w-52 gap-4 bg-slate-100 rounded-2xl'>
                <small className='pt-1'>#{pokemon.id}</small>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className='max-w-[200px]'
            />
            <h1 className='font-semibold'>{pokemon.name}</h1>
            <div className='flex flex-row shadow-xl p-4 w-full justify-center gap-4 '>
                {pokemon.types && pokemon.types.map((item) =>
                    <div key={item.slot} className={`${item.type.name} px-4 py-2 rounded-md`}>
                        {item.type.name}
                    </div>)}
            </div>
        </Link>
    )
}

export default PokemonCard