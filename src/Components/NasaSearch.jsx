import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from '../svg/search.svg';

import '../styles/NasaSearch.scss';
import Checkbox from '../Shared/Checkbox/Checkbox';

const NasaSearch = ({ submitSearch }) => {

    const [inputValue, setInputValue] = useState('');
    const [searchImages, setSearchImages] = useState(true);
    const [searchVideos, setSearchVideos] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch(inputValue, searchImages, searchVideos);
    };

    const handleClick = () => {
        submitSearch(inputValue, searchImages, searchVideos);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='nasa-search'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='nasa-search__input'>
                    <input
                        type='text'
                        placeholder='Please enter a search term'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <div className='nasa-search__input-icon' onClick={handleClick}>
                        <SearchIcon data-testid='nasa-search-icon' />
                    </div>
                </div>
            </form>
            <div className='nasa-search__options'>
                <Checkbox name='search-options' checked={searchImages} labelText='Images' id='search-images' onChange={() => setSearchImages(searchImages ? false : true)} />
                <Checkbox name='search-options' checked={searchVideos} labelText='Videos' id='search-videos' onChange={() => setSearchVideos(searchVideos ? false : true)} />
            </div>
        </div>
    );
};

NasaSearch.propTypes = {
    submitSearch: PropTypes.func.isRequired
};

export default NasaSearch;