import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from '../svg/search.svg';

import '../styles/NasaSearch.scss';

const NasaSearch = ({ submitSearch }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch(inputValue);
    };
    
    const handleClick = () => {
        submitSearch(inputValue);
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
        </div>
    );
};

NasaSearch.propTypes = {
    submitSearch: PropTypes.func.isRequired
};

export default NasaSearch;