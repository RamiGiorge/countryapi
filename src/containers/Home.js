import { useEffect, useState } from "react";
import CountriesGrid from "../components/CountriesGrid/CountriesGrid";
import SearchForm from "../components/SearchForm/SearchForm";
import useFetch from "../sevices/useFetch";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

const Home = () => {
    const [results, setResults] = useState(null)
    const { data, isLoading, error } = useFetch()

    useEffect(() => {
        data && setResults(data)
    }, [data])

    return (
        <section>
            <SearchForm countries={data} setResults={setResults} />
            {isLoading && <Loading />}
            {error && <Error message={error.message} />}
            <CountriesGrid results={results} />
        </section>
    )
}

export default Home