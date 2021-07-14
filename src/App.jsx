import React, { useState, useEffect } from 'react';

import NasaSearch from './components/NasaSearch';
import NasaSearchResults from './components/NasaSearchResults';

import LoadingSpinner from './Shared/LoadingSpinner/LoadingSpinner';

import './App.scss';

const App = ({ nasaApi }) => {

    const [loading, setLoading] = useState(false);
    const [noSearchQueryError, setNoSearchQueryError] = useState(false);
    const [searchResults, setSearchResults] = useState(null);

    const submitSearch = (searchQuery) => {
        setLoading(true);
        setNoSearchQueryError(false);

        if (searchQuery) {
            return nasaApi.search(searchQuery)
                .then(result => {
                    setSearchResults(result.collection);
                });
        } else {
            setSearchResults(null);
            setNoSearchQueryError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(false);
    }, [searchResults]);

    return (
        <div className='nasa-main'>
            <div className='nasa-main__container'>
                <h1 className='nasa-main__title'>NASA Search</h1>
                {
                    loading ?
                        <LoadingSpinner /> :
                        <>
                            <NasaSearch submitSearch={submitSearch} />
                            {noSearchQueryError && <p className='nasa-main__no-search-term'>Please enter a search term</p>}
                            {searchResults && <NasaSearchResults searchResults={searchResults} />}
                        </>
                }
            </div>
        </div>
    );
};

export default App;