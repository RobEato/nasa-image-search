import React, { useState, useEffect } from 'react';

import NasaSearch from './components/NasaSearch';
import NasaSearchResults from './components/NasaSearchResults';

import LoadingSpinner from './Shared/LoadingSpinner/LoadingSpinner';

import './App.scss';
import NasaAsset from './components/NasaAsset';

const App = ({ nasaApi }) => {

    const [loading, setLoading] = useState(false);
    const [noSearchQueryError, setNoSearchQueryError] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [assetToView, setAssetToView] = useState(null);

    const submitSearch = (searchTerm, imageSearch, videoSearch) => {
        setLoading(true);
        setNoSearchQueryError(false);

        if (searchTerm) {
            return nasaApi.search({ q: searchTerm, media_type: 'image', page: pageNumber })
                .then(result => {
                    setSearchResults(result.collection);
                });
        } else {
            setSearchResults(null);
            setNoSearchQueryError(true);
            setLoading(false);
        }
    };

    const selectAsset = (assetId) => {
        return nasaApi.getAsset(assetId)
            .then(result => {
                setAssetToView(result);
            });
    };

    useEffect(() => {
        setLoading(false);
    }, [searchResults]);

    return (
        <div className='nasa-main'>
            <div className='nasa-main__container'>
                {
                    assetToView ?
                        <NasaAsset asset={assetToView} /> :
                        <>
                            <h1 className='nasa-main__title'>NASA Search</h1>
                            <NasaSearch submitSearch={submitSearch} />
                            {
                                loading ?
                                    <LoadingSpinner /> :
                                    <>
                                        {noSearchQueryError && <p className='nasa-main__no-search-term'>Please enter a search term</p>}
                                        {searchResults && <NasaSearchResults searchResults={searchResults} setPageNumber={setPageNumber} pageNumber={pageNumber} selectAsset={selectAsset} />}
                                    </>
                            }
                        </>
                }

            </div>
        </div>
    );
};

export default App;