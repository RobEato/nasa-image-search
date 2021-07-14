import React, { useState } from 'react';

import NasaSearch from './Components/NasaSearch';
import NasaSearchResults from './Components/NasaSearchResults';

import './App.scss';

const App = ({ nasaApi }) => {

    const [searchResults, setSearchResults] = useState(null);

    const submitSearch = (searchQuery) => {
        return nasaApi.search(searchQuery)
            .then(results => {
                setSearchResults(results.collection);
            });
    };

    return (
        <div className='nasa-main'>
            <div className='nasa-main-container'>
                <h1 className='nasa-main-title'>NASA Search</h1>
                <NasaSearch submitSearch={submitSearch} />
                {
                    searchResults &&
                    <NasaSearchResults searchResults={searchResults} />
                }
            </div>
        </div>
    );
};

export default App;