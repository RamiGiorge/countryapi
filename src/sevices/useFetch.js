import { useState, useEffect } from 'react'
import axios from "axios";

const useFetch = () => {
    const [countries, setCountries] = useState({
        countries: null,
        isLoading: true,
        error: ''
    })

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all', { cancelToken: source.token })
                const data = await response.data
                setCountries({ countries: data, isLoading: false, error: '' })
            } catch (e) {
                setCountries({ countries: null, isLoading: false, error: e.message })
            }
        }
        getCountries()
        return () => source.cancel()
    }, [])

    return countries
}

export default useFetch