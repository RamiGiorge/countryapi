import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import Card from '../Card/Card';

const CountriesGrid = ({ results }) => {

    const [next, setNext] = useState(20)

    return (
        <div className='gridContainer'>
            <section className="countryGrid">{results?.map((country, i) => (
                i < next ? <Card country={country} key={country.name.common} /> : null
            ))}
            </section>
            {!results?.length && <h3 className='searchResult'>No countries found!</h3>}
            <button onClick={() => setNext(prev => prev + 20)} className='fetchBtn'>
                <FaChevronDown />
            </button>
        </div>
    )
}

export default CountriesGrid