import React from 'react'
import { useNavigate } from 'react-router-dom'

const CountryDetails = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default CountryDetails