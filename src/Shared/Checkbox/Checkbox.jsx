import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ labelText, name, id, onChange, checked }) => {
    return (
        <div className='checkbox'>
            <div className={checked ? 'selected' : ''}>
                <input type='checkbox' id={id} name={name} checked={checked} onChange={onChange} />
            </div>
            <label htmlFor={id}>{labelText}</label>
        </div>);
};

Checkbox.propTypes = {
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired
};

export default Checkbox;