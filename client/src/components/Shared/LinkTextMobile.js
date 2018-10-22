import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/NavLink';

export const LinkTextMobile = ({ to, children }) => <NavLink to={to} exact className="link-mobile" activeClassName="actived"> {children} </NavLink>;

LinkTextMobile.propTypes = {
    children: PropTypes.string.isRequired,
};
