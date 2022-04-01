import React from 'react'
import loading from '../../assets/loading.gif'
import StyledModal from '../../styles/modal.styled'

const Loading = () => {
    return (
        <StyledModal>
            <img src={loading} alt="loading" />
        </StyledModal>
    )
}

export default Loading