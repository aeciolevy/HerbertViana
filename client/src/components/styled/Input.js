import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ className, style, type, ...props}) => (
    <input
        className={className}
        style={{...style}}
        type={type || 'text'}
        {...props}
    />
);

Input.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
};

export default Input;
