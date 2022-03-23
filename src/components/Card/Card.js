import React from 'react'

const Card = ({ country }) => {
    return (
        <p>{country.name.common}</p>
    )
}

export default Card