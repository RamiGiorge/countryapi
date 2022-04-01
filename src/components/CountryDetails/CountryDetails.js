import React, { useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import StyledDetails from '../../styles/details.styled'

const CountryDetails = () => {
    const navigate = useNavigate()
    const { state: country } = useLocation()

    useEffect(() => {
        !country && navigate('/countryapi/NotFound')
    }, [country, navigate])

    const renderLanguages = () => (
        <ul>Languages Spoken: {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
        ))}
        </ul>
    )

    const renderCurrencies = () => (
        <ul>Currencies Used: {Object.values(country.currencies).map(({ name }) => (
            <li key={name}>{name}</li>
        ))}
        </ul>
    )

    return (
        <StyledDetails className='details-container'>
            <button onClick={() => navigate('/countryapi')}>
                <FaChevronLeft />
                <span>Back</span>
            </button>
            {country && <div>
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
        </StyledDetails>
    )
}

export default CountryDetails