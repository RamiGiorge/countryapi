import styled from 'styled-components'

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px;
    background: var(--background);
    min-height: 100%;
    transition: all 0.2s ease;

    button {
        align-self: flex-start;
        padding: 20px;
        font-weight: 700;
        color: var(--dark-gray);
        border-radius: 10px;      
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        box-shadow: -8px -8px 15px #fff, 8px 8px 15px #babecc;
        transition: all 0.2s ease;
        &:hover {
            transform: scale(1.1);
            color: var(--text);
            span {
                color: var(--text);
                font-weight: 700;
            }
        }

        span {
            transition: all 0.2s ease;
        }
    }

    div {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        box-shadow: -8px -8px 15px #fff, 8px 8px 15px #babecc;
        padding: 20px;
        border-radius: 20px;
        font-weight: 700;

        h1 {
            text-align: center;
        }
    }
`

export default StyledDetails