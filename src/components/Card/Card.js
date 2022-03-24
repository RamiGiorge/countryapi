import React from 'react'

const Card = ({ country }) => {
    return (
        <div className='card pointer'>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="country flag" />
            <p>Population: <span>{Number(country.population).toLocaleString()}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
            {country.languages && <p>Language: <span>{Object.values(country.languages)[0]}</span></p>}
        </div>
    )
}

export default Card