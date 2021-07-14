import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ text, onClick, type }) => {
    return (
        <button className={`button ${type}`} type='button' onClick={onClick}>{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Button;