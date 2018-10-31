import React from 'react';
import PropTypes from 'prop-types';

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

const Image = ({ className, style, onLoad, ...props}) => (
    <img
        className={className}
        style={{ ...style}}
        onLoad={callAll(onLoad)}
        {...props}
    />
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onLoad: PropTypes.func,
};

export default Image;
