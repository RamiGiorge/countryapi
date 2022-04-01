import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard } from '../../styles/card.styled'

const Card = ({ country }) => {
    return (
        <StyledCard>
            <Link to={`./country/${country.name.common}`} state={country}>
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt="country flag" />
                <p>Population: <span>{Number(country.population).toLocaleString()}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </Link>
        </StyledCard>
    )
}

export default Card