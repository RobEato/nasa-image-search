import React from 'react';
import PropTypes from 'prop-types';

const NasaSearchResult = ({ item, selectAsset }) => {
    return (
        <div className='search-result' data-testid='search-result' onClick={() => selectAsset(selectAsset)}>
            <img className='search-result__image' src={item.links[0].href} alt={item.data[0].title} />
        </div>
    )
};

NasaSearchResult.propTypes = {
    item: PropTypes.object.isRequired
};

export default NasaSearchResult;