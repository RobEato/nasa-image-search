import React from 'react';
import PropTypes from 'prop-types';

import NasaSearchResult from './NasaSearchResult';
import Button from '../Shared/Button/Button';

import '../styles/NasaSearchResults.scss';

const NasaSearchResults = ({ searchResults, setPageNumber, pageNumber, selectAsset }) => {

    const hasSearchResults = searchResults.items.length;

    return (
        <>
            <p className='nasa-search-results__total'>{searchResults.metadata.total_hits} results found</p>
            {
                hasSearchResults ?
                    <div className='nasa-search-results'>
                        {
                            searchResults.items.length &&
                            searchResults.items.map((item, i) => {
                                if (item.links && item.links[0].href) {
                                    return (
                                        <NasaSearchResult item={item} key={i} selectAsset={selectAsset} />
                                    );
                                }

                                return null;
                            })
                        }
                    </div> :
                    <p className='nasa-search-results__empty'>No search results found. Please try again.</p>
            }
            {
                searchResults.links &&
                <div className='nasa-search-results__pagination'>
                    {
                        searchResults.links.map((link, i) => {
                            if (link.prompt === 'Previous') {
                                return (
                                    <Button text='Load previous' onClick={() => setPageNumber(pageNumber - 1)} />
                                );
                            }

                            return null;
                        })
                    }
                    {
                        searchResults.links.map((link, i) => {
                            if (link.prompt === 'Next') {
                                return (
                                    <Button key={i} text='Load next' onClick={() => setPageNumber(pageNumber + 1)} />
                                );
                            }

                            return null;
                        })
                    }
                </div>
            }
        </>
    );
};

NasaSearchResults.propTypes = {
    searchResults: PropTypes.object.isRequired,
    setPageNumber: PropTypes.func.isRequired,
    selectAsset: PropTypes.func.isRequired,
    pageNumber: PropTypes.number.isRequired
};

export default NasaSearchResults;