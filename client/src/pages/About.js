import React, { lazy } from 'react';
import DivFlex from '../components/styled/DivFlex';
import Footer from '../components/styled/Footer';
import MainContent from '../components/About/MainContent';

const ContainerWithBackground = lazy(() => import( /* webpackChunkName: "MainContainer" */
    '../components/styled/ContainerWithBackground'));
const Navbar = lazy(() => import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar'));

const About = () => {
    return(
        <div>
            <ContainerWithBackground>
                <Navbar />
            </ContainerWithBackground>
            <DivFlex width="100%" height="68vh" 
                style={{ position: 'absolute', top: '9.25rem', backgroundColor: 'white' }}> 
                <MainContent />
            </DivFlex>
            <Footer position="sticky" height="8.25rem">

            </Footer>
        </div>
    );
};

export default About;
