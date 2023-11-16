import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const PokemonCardFull = ({ pokemon }) => {

    const padWithZeros = (input) => {

        const size = input.length;
        console.log(size)

        if (size === 1) {
            return `00${input}`;
        } else if (size === 2) {
            return `0${input}`;
        } else {
            return input;
        }
    };


    console.log(pokemon.types)
    return (
        <Container type={pokemon.types[0].type.name} >
            <div className='flex flex-col py-4 justify-between  w-full'>
                <header className='flex flex-row  items-center justify-between w-full '>
                    <div className='flex flex-row gap-4 items-center'>
                        <Link to={"/"}>Voltar</Link>
                        <h1 className='text-3xl text-white font-bold'>
                            {pokemon.name}
                        </h1>
                    </div>
                    <p className='font-semibold'>
                        #{pokemon && padWithZeros(pokemon.id)}
                    </p>
                </header>
                <div className=' rounded-lg px-4  py-5 flex flex-col items-center'>
                    <div className='flex flex-col max-h-[100px] items-center'>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className='relative -top-12 w-[230px] h-[230px]'
                        />
                    </div>
                </div>
                <section className='bg-white flex flex-col p-5 pt-14 '>
                    <div className='flex flex-col p-4 w-full items-center justify-center gap-4 '>
                        {pokemon.types && pokemon.types.map((item) =>
                            <div key={item.slot} className={`${item.type.name} px-4 py-2 rounded-md`}>
                                {item.type.name}
                            </div>)}

                        <h2 className={`text-red-500 font-bold text-base`}>Sobre</h2>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default PokemonCardFull