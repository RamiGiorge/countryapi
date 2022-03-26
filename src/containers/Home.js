import { useEffect, useState } from "react";
import CountriesGrid from "../components/CountriesGrid/CountriesGrid";
import SearchForm from "../components/SearchForm/SearchForm";
import useFetch from "../sevices/useFetch";
import Loading from "../components/Loading/Loading";

const Home = () => {
    const [results, setResults] = useState(null)
    const { data, status, error } = useFetch()

    useEffect(() => {
        status === 'success' && setResults(data)
    }, [status, data])

    return (
        <section>
            <SearchForm countries={data} setResults={setResults} />
            {status === 'loading' && <Loading />}
            {error && <h3>{error.message}</h3>}
            <CountriesGrid results={results} />
        </section>
    )
}

export default Home