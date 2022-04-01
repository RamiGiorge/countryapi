import styled from 'styled-components'

const StyledModal = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    padding-inline: 20px;
    z-index: 10;

    img {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        box-shadow: -8px -8px 15px #fff, 8px 8px 15px #babecc;
    }
`

export const ErrorModal = styled(StyledModal)`
    flex-direction: column;
    gap: 1rem;
    background: rgb(245, 245, 245) !important;

    img {
        height: 200px;
        width: 250px;
        border-radius: 10px;
    }

    h1, span {
        color: ${({ theme }) => theme.colors.warning};
        font-weight: 700;
        text-align: center;
        box-shadow: -8px -8px 15px #fff, 8px 8px 15px #babecc;
        padding: 10px 15px;
        border-radius: 10px;
    }

    span {
        padding: 5px 8px;
        border-radius: 5px;
    }
`

export default StyledModal