import styled from 'styled-components'

const StyledForm = styled.form`
    background: var(--background);
    box-shadow: 0 0 5px var(--background);
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .4s ease;

    > div {
        position: relative;
        background: white;
        padding: 12px;
        border-radius: 5px;
        box-shadow: inset 2px 2px 3px var(--background), inset -2px -2px 3px rgba(0, 0, 0, 0.1);
    }

    .inputContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--faded);
        gap: 20px;
        width: 40%;

        input {
            border: none;
            background: none;
            outline: none;
            width: 100%;   
            &::placeholder {
                color: var(--faded);
            }
        }
    }

    .filterContainer {
        z-index: 1;
        width: 200px;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            color: var(--faded);
            cursor: pointer;
        }
    }

    ul {
        position: absolute;
        background: rgba(255, 255, 255, 0.7);
        width: 100%;
        top: 110%;
        left: 0;
        border-radius: 5px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        backdrop-filter: blur(10px);
        color: black;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        z-index: 9;
        animation: fadein 0.4s ease;
        list-style: none;

        li{
            transition: font-size 0.4s ease;
            &:hover {
                cursor: pointer;
                font-weight: 700;
                font-size: 1.2rem;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        gap: 20px;

        .inputContainer {
            width: 100%;
        }

        .filterContainer {
            align-self: flex-start;
        }
    }
`

export default StyledForm