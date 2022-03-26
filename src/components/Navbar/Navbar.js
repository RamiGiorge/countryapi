import React, { useEffect, useState } from 'react'
import { FaMoon, FaLightbulb } from 'react-icons/fa'

const Navbar = () => {
    const [dark, setDark] = useState(false)

    const toggleDark = () => {
        setDark(!dark)
    }

    useEffect(() => {
        const main = document.querySelector('main')
        dark ? main.classList.add('dark') : main.classList.remove('dark')
        dark ? document.body.style.background = 'black' : document.body.style.background = 'white'
    }, [dark])

    return (
        <nav className='navbar'>
            <h1>Where in the world?</h1>
            <button onClick={(toggleDark)} className='pointer'>
                {dark ? <FaLightbulb className='icon' /> : <FaMoon className='icon' />}
                <h3>{dark ? 'Light ' : 'Dark '}Mode</h3>
            </button>
        </nav>
    )
}

export default Navbar