import React, { Component } from 'react';
import Introduction from '../components/App/Introduction';
import Async from 'react-code-splitting';

const ContainerWithBackground = (props) => <Async load={import( /* webpackChunkName: "MainContainer" */ 
    '../components/styled/ContainerWithBackground')} componentProps={props} />;
const Navbar = (props) => <Async load={import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar')} componentProps={props} />;
const PolygonBooks = (props) => <Async load={import(/* webpackChunkName: "PolygonBooks" */
    '../components/styled/PolygonBooks')} componentProps={props} />;
const MiddleEbook = (props) => <Async load={import(/* webpackChunkName: "MIddleEbook" */
    '../components/App/MiddleEbook')} componentProps={props} />;

class App extends Component {
    render() {
        return (
            <>
                <ContainerWithBackground>
                    <Navbar />
                    <Introduction />
                    <MiddleEbook />
                </ContainerWithBackground>
                <PolygonBooks />
            </>
        );
    }
}

export default App;
