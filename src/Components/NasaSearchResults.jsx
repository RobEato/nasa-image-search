import React from 'react';
import PropTypes from 'prop-types';

import NasaSearchResult from './NasaSearchResult';
import Button from '../Shared/Button/Button';

import '../styles/NasaSearchResults.scss';

const NasaSearchResults = ({ searchResults }) => {
    return (
        <div className='nasa-search-results'>
            <p className='nasa-search-results__total'>{searchResults.metadata.total_hits} results found</p>
            {
                searchResults.items.length ?
                    searchResults.items.map((item, i) => {
                        return (
                            <NasaSearchResult item={item} key={i} />
                        );
                    }) :
                    <p className='nasa-search-results__empty'>No search results found. Please try again.</p>
            }
            {
                searchResults.links &&
                <div className='nasa-search-results__pagination'>
                    <Button text='Load more' onClick={() => { }} />
                </div>
            }
        </div>
    );
};

NasaSearchResults.propTypes = {
    searchResults: PropTypes.object.isRequired
};

export default NasaSearchResults;