import React from 'react'
import sadface from '../../assets/sadface.png'
import { ErrorModal } from '../../styles/modal.styled'

const Error = ({ message }) => {
    return (
        <ErrorModal>
            <img src={sadface} alt="sad face" />
            <h1>Something went wrong!</h1>
            <h3>{message}</h3>
        </ErrorModal>
    )
}

export default Error