import React from 'react'
import { FaMoon } from 'react-icons/fa'

const Navbar = ({ setDark }) => {

    const toggleDark = () => {
        setDark(prev => !prev)
    }

    return (
        <nav className='navbar'>
            <h1>Where in the world?</h1>
            <button onClick={toggleDark} className='pointer'>
                <FaMoon />
                <h3>Dark Mode</h3>
            </button>
        </nav>
    )
}

export default Navbar