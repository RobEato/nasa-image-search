import React from 'react';
import PropTypes from 'prop-types';

const NasaSearchResult = ({ item }) => {
    return (
        <div className='search-result'>
           <h1>{item.data[0].title}</h1>
        </div>
    );
};

NasaSearchResult.propTypes = {
    item: PropTypes.object.isRequired
};

export default NasaSearchResult;