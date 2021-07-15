import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Button from '../Shared/Button/Button';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

import '../styles/NasaAsset.scss';

const NasaAsset = ({ asset, setAssetToView, api }) => {

    const [assetInfo, setAssetInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return api.getAsset(asset.data[0].nasa_id)
            .then(result => setAssetInfo(result.collection));
    }, [api, asset]);

    useEffect(() => {
        if (assetInfo) {
            setLoading(false);
        }
    }, [assetInfo]);

    if (loading)
        return <LoadingSpinner />

    return (
        <div className='nasa-asset'>
            <h1>{asset.data[0].title}</h1>
            <p>{asset.data[0].description}</p>
            {
                asset.data[0].media_type === 'image' ?
                <LazyLoadImage  src={assetInfo.items[0].href} alt={asset.data[0].title} effect='blur' /> :
                <ReactPlayer width='100%' height='auto' url={assetInfo.items[1].href} playing={true} controls={true} />
            }
            <Button text='Back to search' onClick={() => setAssetToView(null)} />
        </div>
    );
};

NasaAsset.propTypes = {
    api: PropTypes.object.isRequired,
    asset: PropTypes.object.isRequired,
    setAssetToView: PropTypes.func.isRequired
};

export default NasaAsset;