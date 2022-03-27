import React from 'react'
import sadface from '../../assets/sadface.png'

const Error = ({ message }) => {
    return (
        <div className='error'>
            <img src={sadface} alt="sad face" />
            <h1>Something went wrong!</h1>
            <h3>{message}</h3>
        </div>
    )
}

export default Error