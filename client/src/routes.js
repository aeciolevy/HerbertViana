import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div> Loading... </div>;

export const App = Loadable({
    loader: () => import('./pages/App'),
    loading: Loading,
});

export const About = Loadable({
    loader: () => import('./pages/About'),
    loading: Loading,
});

