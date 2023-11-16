import React, { useEffect, useState } from 'react'
import PokeIcon from '../assets/pokeball.png'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokemon/search/${search}`)
    }

    useEffect(() => {
        handleClick()
    }, [search])

    return (
        <nav className='flex flex-row w-full justify-between  py-4 gap-4'>
            <Link to={'/'} className='flex gap-4 w-3/5 items-center'>
                <img src={PokeIcon} alt="Logo pokemon" className='w-12' />
                <h1 className='text-3xl font-bold md:text-5xl text-white'>Pokédex</h1>
            </Link >

            <input className='rounded-2xl px-4 w-2/6 py-1 self-center'
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                value={search}
                placeholder='Pesquisar pokemon' />
        </nav>
    )
}

export default NavBar