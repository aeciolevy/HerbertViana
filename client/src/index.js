import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as route from './routes';
import * as serviceWorker from './serviceWorker';
// Fonts and CSS
import "typeface-roboto";
import "typeface-montserrat";
import './index.css';
import 'normalize.css';
// Modals
import { ModalProvider } from './components/Shared/Modal/ModalContext';
import ModalRoot from './components/Shared/Modal/ModalRoot';
// Icons
import SetupIcon from './SetupIcons';
SetupIcon.init();

ReactDOM.render(
    <ModalProvider>
        <ModalRoot />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={route.App} />
                <Route exact path="/aboutme" component={route.About} />
            </Switch>
        </BrowserRouter>
    </ModalProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
