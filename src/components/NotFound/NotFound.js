import React from 'react'
import { Link } from 'react-router-dom'
import sadface from '../../assets/sadface.png'
import { ErrorModal } from '../../styles/modal.styled'

const NotFound = () => {
    return (
        <ErrorModal>
            <img src={sadface} alt="sad face" />
            <h1>The page you requested cannot be found!</h1>
            <h2>Let's take you back <span><Link to={'/countryapi'}>HOME!</Link></span></h2>
        </ErrorModal>
    )
}

export default NotFound