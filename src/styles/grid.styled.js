import styled from 'styled-components'

export const StyledGrid = styled.div`
    height: 100vh;

    section {
        min-height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        gap: 20px;
        background: var(--background);
        padding: 20px 40px;
        border-radius: 0 0 10px 10px;
    }

    h3 {
        color: var(--text);
        text-align: center;
        font-weight: 700;
        margin-top: 40px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 20px;
        font-size: 1.5rem;
        animation: fadein 1.5s ease-in-out infinite alternate;
        box-shadow: 0 -5px 20px #fff;
    }
`