import {useState , useEffect } from 'react';
import Yelp from '../api/yelp';

export default  () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    searchApi = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'SON JOSE'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went worng');
        }
    }

    useEffect (()=>{
        searchApi('pasta')
    },[]);
    return [searchApi , results , errorMessage]
}