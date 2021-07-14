import React from 'react';
import PropTypes from 'prop-types';

const NasaSearchResult = ({ item }) => {
    return (
        <div className='search-result' data-testid='search-result'>
            {
                item.links && item.links[0].href &&
                <img src={item.links[0].href} alt={item.data[0].title} />
            }
        </div>
    );
};

NasaSearchResult.propTypes = {
    item: PropTypes.object.isRequired
};

export default NasaSearchResult;