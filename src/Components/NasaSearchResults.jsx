import React from 'react';
import PropTypes from 'prop-types';

import NasaSearchResult from './NasaSearchResult';

import '../styles/NasaSearchResults.scss';

const NasaSearchResults = ({ searchResults }) => {
    return (
        <div className='nasa-search-results'>
            {searchResults.items.length ?
                searchResults.items.map((item, i) => {
                    return (
                        <NasaSearchResult item={item} key={i} />
                    );
                }) : 
                <p>No search results found. Please try again.</p>
            }
        </div>
    );
};

NasaSearchResults.propTypes = {
    searchResults: PropTypes.object.isRequired
};

export default NasaSearchResults;