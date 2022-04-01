import React, { useEffect, useState } from 'react'
import { FaMoon, FaLightbulb } from 'react-icons/fa'
import { StyledNavbar } from '../../styles/navbar.styled'


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
        <StyledNavbar>
            <h1>Where in the world?</h1>
            <button onClick={(toggleDark)}>
                {dark ? <FaLightbulb /> : <FaMoon />}
                <h3>{dark ? 'Light ' : 'Dark '}Mode</h3>
            </button>
        </StyledNavbar>
    )
}

export default Navbar