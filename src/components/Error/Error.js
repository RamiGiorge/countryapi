import React from 'react'

const Error = ({ message }) => {
    return (
        <div className='error'>
            <h1>Something went wrong!</h1>
            <h3>{message}</h3>
        </div>
    )
}

export default Error