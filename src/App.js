import { useEffect, useState } from "react";
import CountriesGrid from "./components/CountriesGrid/CountriesGrid";
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./components/SearchForm/SearchForm";
import useFetch from "./sevices/useFetch";

function App() {

  const [dark, setDark] = useState(false)
  const { isLoading, error, countries } = useFetch()
  const [results, setResults] = useState(null)

  useEffect(() => {
    setResults(countries)
  }, [countries])

  return (
    <main className={dark ? 'dark-mode' : ''}>
      <Navbar setDark={setDark} />
      <SearchForm countries={countries} setResults={setResults} />
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <CountriesGrid results={results} />
    </main>
  );
}

export default App;
