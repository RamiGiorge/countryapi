import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 40px;
    background: #fff;
    color: var(--dark-gray);
    transition: all .4s ease;

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        h1 {
            font-size: 1.4rem;
        }
    }
`