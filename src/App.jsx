import React, { useState, useEffect } from 'react';

import NasaSearch from './components/NasaSearch';
import NasaSearchResults from './components/NasaSearchResults';
import NasaAsset from './components/NasaAsset';

import LoadingSpinner from './Shared/LoadingSpinner/LoadingSpinner';

import './App.scss';

const App = ({ nasaApi }) => {

    const [loading, setLoading] = useState(false);
    const [noSearchQueryError, setNoSearchQueryError] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [assetToView, setAssetToView] = useState(null);

    const submitSearch = (searchTerm, imageSearch, videoSearch) => {
        setLoading(true);
        setNoSearchQueryError(false);

        let mediaType = 'image' + ',video'; // eslint-disable-line no-useless-concat

        if (imageSearch && !videoSearch) {
            mediaType = 'image';
        }

        if (!imageSearch && videoSearch) {
            mediaType = 'video';
        }

        if (searchTerm) {
            return nasaApi.search({ q: searchTerm, media_type: mediaType, page: pageNumber })
                .then(result => {
                    setSearchResults(result.collection);
                });
        } else {
            setSearchResults(null);
            setNoSearchQueryError(true);
            setLoading(false);
        }
    };

    const selectAsset = (asset) => {
        setAssetToView(asset);
    };

    useEffect(() => {
        setLoading(false);
    }, [searchResults]);

    return (
        <div className='nasa-main'>
            <div className='nasa-main__container'>
                {
                    assetToView ?
                        <NasaAsset asset={assetToView} setAssetToView={setAssetToView} api={nasaApi} /> :
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