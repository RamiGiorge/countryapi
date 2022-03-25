import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import Card from '../Card/Card';

const CountriesGrid = ({ results }) => {

    const [n, setN] = useState(20)

    return (
        <div className='gridContainer'>
            <section className="countryGrid">{results?.map((country, i) => (
                i < n ? <Card country={country} key={country.name.common} /> : null
            ))}
            </section>
            <button onClick={() => setN(prev => prev + 20)} className='fetchBtn'>
                <FaChevronDown />
            </button>
        </div>
    )
}

export default CountriesGrid