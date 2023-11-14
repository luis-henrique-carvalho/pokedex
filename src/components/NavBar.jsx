import React from 'react'
import PokeIcon from '../assets/pokeball.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='flex flex-col w-full py-4 gap-4'>
            <Link to={'/'} className='flex gap-4 w-full  p-4 '>
                <img src={PokeIcon} alt="Logo pokemon" className='w-12' />
                <h1 className='text-xg font-bold md:text-5xl text-white'>Pokédex</h1>
            </Link >
            <form action="" className='w-full flex justify-between'>
                <input className='w-4/6 rounded-2xl px-4' type="text" placeholder='Pesquisar pokemon' />
                <button className='px-4 w-1/4 py-2 bg-white rounded-2xl'>Pesquisar</button>
            </form>
        </nav>
    )
}

export default NavBar