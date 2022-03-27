import React, { useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const CountryDetails = () => {
    const navigate = useNavigate()
    const { state: country } = useLocation()

    useEffect(() => {
        !country && navigate('/countryapi/NotFound')
    }, [country, navigate])

    const renderLanguages = () => (
        <ul className='languages'>Languages Spoken: {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
        ))}
        </ul>
    )

    const renderCurrencies = () => (
        <ul className='currencies'>Currencies Used: {Object.values(country.currencies).map(({ name }) => (
            <li key={Math.random()}>{name}</li>
        ))}
        </ul>
    )

    return (
        <div className='detailsContainer'>
            <button onClick={() => navigate('/countryapi')} className='back'>
                <FaChevronLeft />
                <span>Back</span>
            </button>
            {country && <div className='countryDetails'>
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt="country flag" />
                <p>Population: <span>{Number(country.population).toLocaleString()}</span></p>
                <p>Area: <span>{Number(country.area).toLocaleString()} km2</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
                {renderLanguages()}
                {renderCurrencies()}
                <p>Subregion: <span>{country.subregion}</span></p>
            </div>}
        </div>
    )
}

export default CountryDetails