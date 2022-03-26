import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ country }) => {
    return (
        <Link className='card' to={`./${country.name.common}`}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="country flag" />
            <p>Population: <span>{Number(country.population).toLocaleString()}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
            {country.languages && <p>Language: <span>{Object.values(country.languages)[0]}</span></p>}
        </Link>
    )
}

export default Card