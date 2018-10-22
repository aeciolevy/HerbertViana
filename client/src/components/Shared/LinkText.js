import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/NavLink';

export const LinkText = ({ to, children }) => <NavLink to={to} exact className="link" activeClassName="actived"> {children} </NavLink>;

LinkText.propTypes = {
    children: PropTypes.string.isRequired,
};
