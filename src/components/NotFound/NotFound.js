import React from 'react'
import { Link } from 'react-router-dom'
import sadface from '../../assets/sadface.png'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={sadface} alt="sad face" />
            <h1>
                The page you requested cannot be found!
            </h1>
            <h2>Let's take you back <Link to={'/countryapi'}>Home</Link></h2>
        </div>
    )
}

export default NotFound