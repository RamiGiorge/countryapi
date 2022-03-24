import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa'

const SearchForm = () => {

    const [input, setInput] = useState('')
    const [showFilter, setShowFilter] = useState(false)

    const searchCountry = (e) => {
        e.preventDefault()
        alert(input)
    }

    return (
        <form onSubmit={searchCountry} className='searchForm'>
            <div className='inputContainer'>
                <FaSearch onClick={searchCountry} className='pointer' />
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Search for a country...' />
            </div>
            <div className='filterContainer'>
                <div className='select pointer' onClick={() => setShowFilter(!showFilter)}>
                    <button type='button'>Filter by Region</button>
                    {!showFilter ? <FaChevronDown /> : <FaChevronUp />}
                </div>
                {showFilter &&
                    <ul className='dropdown'>
                        <li>Africa</li>
                        <li>America</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li>
                    </ul>
                }
            </div>
        </form>
    )
}

export default SearchForm