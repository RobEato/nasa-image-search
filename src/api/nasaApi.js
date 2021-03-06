import NodeFetch from 'node-fetch';
import qs from 'qs';

const search = (query) => {
    const queryString = qs.stringify(query);
    return NodeFetch(`https://images-api.nasa.gov/search?${queryString}`)
        .then(res => res.json());
};

const getAsset = (nasaId) => {
    return NodeFetch(`https://images-api.nasa.gov/asset/${nasaId}`)
        .then(res => res.json());
};

const getMetadata = (nasaId) => {
    return NodeFetch(`https://images-api.nasa.gov/metadata/${nasaId}`)
        .then(res => res.json());
};

const getCaptions = (nasaId) => {
    return NodeFetch(`https://images-api.nasa.gov/captions/${nasaId}`)
        .then(res => res.json());
};

const getAlbum = (albumName) => {
    return NodeFetch(`https://images-api.nasa.gov/album/${albumName}`)
        .then(res => res.json());
};

const nasaApi = {
    search,
    getAsset,
    getMetadata,
    getCaptions,
    getAlbum
};


export default nasaApi;