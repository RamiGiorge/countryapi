import styled from 'styled-components'

export const StyledCard = styled.div`
    height: 350px;
    border-radius: 10px;
    animation: fadein ease-in 0.4s;

    a {
        height: 100%;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        font-size: 0.9em;
        font-weight: 700;
        box-shadow: -8px -8px 15px #fff, 8px 8px 15px #babecc;
        transition: all .2s ease;
        cursor: pointer;
        overflow: hidden;
        &:hover {
            transform: scale(0.9);
            box-shadow: inset -8px -8px 15px #fff, inset 8px 8px 15px #babecc;
            cursor: zoom-in;  
        }

        h1 {
            text-align: center;
        }

        img {
            height: 150px;
            width: 100%;
            margin: 10px 0;
         }
    }
`