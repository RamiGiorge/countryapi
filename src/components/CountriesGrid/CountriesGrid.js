import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import Card from '../Card/Card';
import { StyledGrid } from '../../styles/grid.styled'

const CountriesGrid = ({ results }) => {

    const [next, setNext] = useState(20)

    return (
        <StyledGrid>
            {results?.length ? <section>{results.map((country, i) => (
                i < next ? <Card country={country} key={country.name.common} /> : null
            ))}
            </section> : null}
            {!results?.length && <h3>No countries found!</h3>}
            <button onClick={() => setNext(prev => prev + 20)} className='fetchBtn'>
                <FaChevronDown />
            </button>
        </StyledGrid>
    )
}

export default CountriesGrid