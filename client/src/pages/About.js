import React from 'react';
import Async from 'react-code-splitting';

const ContainerWithBackground = (props) => <Async load={import( /* webpackChunkName: "MainContainer" */
    '../components/styled/ContainerWithBackground')} componentProps={props} />
const Navbar = (props) => <Async load={import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar')} componentProps={props} />

const About = () => {
    return(
        <div>
            <ContainerWithBackground>
                <Navbar />
                <div style={{ height: '800px', width: '100%' }} ></div>
            </ContainerWithBackground>
        </div>
    )
}

export default About;
