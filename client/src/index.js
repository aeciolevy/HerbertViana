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
// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { far, faCircle, faSquare, faCheckCircle, faHeart  } from '@fortawesome/free-regular-svg-icons';
library.add(fab, far, faFacebook, faFacebookF, faSquare, faHeart, faCheckCircle, faInstagram, faLinkedinIn, faCircle);


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={route.App} />
            <Route exact path="/aboutme" component={route.About} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
