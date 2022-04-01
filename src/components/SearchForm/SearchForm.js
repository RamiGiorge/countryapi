import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import StyledForm from "../../styles/searchForm.styled"

const SearchForm = ({ countries, setResults }) => {
  const [input, setInput] = useState("")
  const [showFilter, setShowFilter] = useState(false)
  const [suggestions, setSuggestions] = useState(null)

  const [region, setRegion] = useState("Filter by Region")
  const regions = useMemo(() => ["Africa", "Americas", "Asia", "Oceania", "Europe"], [])

  const inputRef = useRef(null)
  const autoRef = useRef(null)

  useEffect(() => {
    const fetchBtn = document.querySelector('.fetchBtn')
    input ? fetchBtn.style.display = 'none' : fetchBtn.style.display = 'flex'
  }, [input])

  useEffect(() => {
    countries && inputRef.current.focus()
  }, [countries])

  useEffect(() => {
    const clickListen = (e) => {
      if (autoRef.current && !autoRef.current.contains(e.target)) setSuggestions(null)
    }
    window.addEventListener('click', clickListen)
    return () => window.removeEventListener('click', clickListen)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSuggestions(null)
  }

  const clearSearch = () => {
    setInput('')
    inputRef.current.focus()
  }

  const getCountries = useCallback(() => {
    if (input) {
      const results = regions.includes(region) ?
        countries?.filter((c) => c.name.common.toLowerCase().includes(input) && c.region === region)
        : countries?.filter(c => c.name.common.toLowerCase().includes(input))
      results.length ? setSuggestions(results) : setSuggestions(null)
      setResults(results)
      results.length === 1 && results[0].name.common.toLowerCase() === input && setSuggestions(null)
    } else {
      const results = regions.includes(region) ? countries?.filter(c => c.region === region) : countries
      setResults(results)
      setSuggestions(null)
    }
  }, [countries, region, input, setResults, regions])

  useEffect(() => {
    let isMounted = true
    isMounted && getCountries()
    return () => (isMounted = false)
  }, [getCountries])

  const onChange = (e) => setInput(e.target.value.toLowerCase())

  const selectCountry = (country) => setInput(country.name.common.toLowerCase())

  const selectRegion = (e) => {
    setRegion(e.target.textContent)
    setShowFilter(false)
  }

  return (
    <StyledForm onSubmit={handleSearch}>
      <div className="inputContainer">
        <input ref={inputRef} type="text" value={input} onChange={onChange}
          placeholder="Search for a country..." disabled={countries ? false : true} />
        <button type='button' onClick={clearSearch}>Clear</button>

        {suggestions && (
          <ul ref={autoRef}>
            {suggestions.map((country) => (
              <li key={country.name.common} onClick={() => selectCountry(country)}>
                {country.name.common}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="filterContainer">
        <div onClick={() => setShowFilter(!showFilter)}>
          <button type="button">{region}</button>
          {!showFilter ? <FaChevronDown /> : <FaChevronUp />}
        </div>

        {showFilter && (
          <ul>
            <li onClick={selectRegion}>All</li>
            {regions.map((region) => <li onClick={selectRegion} key={region}>{region}</li>)}
          </ul>
        )}
      </div>
    </StyledForm>
  )
}

export default SearchForm
