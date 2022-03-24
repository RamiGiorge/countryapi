import React from 'react'

const Card = ({ country }) => {
    return (
        <div className='card'>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="country flag" />
            <p>Population: {Number(country.population).toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            {country.languages && <p>Language: {Object.values(country.languages)[0]}</p>}
        </div>
    )
}

export default Card