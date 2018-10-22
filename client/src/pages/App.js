import React, { Component } from 'react';
import Async from 'react-code-splitting';

const ContainerWithBackground = (props) => <Async load={import( /* webpackChunkName: "MainContainer" */ 
    '../components/styled/ContainerWithBackground')} componentProps={props} />
const Navbar = (props) => <Async load={import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar')} componentProps={props} />

class App extends Component {
  render() {
    return (
        <ContainerWithBackground>
            <Navbar />
            <div style={{height: '800px', width: '100%'}} ></div>
        </ContainerWithBackground>
    );
  }
}

export default App;
