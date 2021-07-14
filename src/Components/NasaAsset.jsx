import React from 'react';
import PropTypes from 'prop-types';

import '../styles/NasaAsset.scss';

const NasaAsset = ({ asset }) => {
    return (
        <div className='nasa-asset'>
            <h1>Asset Title</h1>
        </div>
    );
};

NasaAsset.propTypes = {
    asset: PropTypes.object.isRequired
};

export default NasaAsset;