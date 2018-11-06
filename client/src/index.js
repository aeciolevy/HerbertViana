import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

// Code Split

const App = lazy(() => import(/* webpackChunkName: "App" */ './pages/App'));
const About = lazy(() => import( /* webpackChunkName: "AboutPage" */'./pages/About'));

ReactDOM.render(
    <ModalProvider>
        <ModalRoot />
        <Suspense fallback={<div> Carregando... </div>}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ props => <App {...props} />} />
                    <Route exact path="/aboutme" component={props => <About {...props}/> } />
                </Switch>
            </BrowserRouter>
        </Suspense>
    </ModalProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
