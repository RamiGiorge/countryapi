import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    return await response.data
}

const useFetch = () => {
    const { data, status, error } = useQuery('countries', fetchCountries, {
        staleTime: Infinity,
        cacheTime: 600000
    })

    return { data, status, error }
}

export default useFetch