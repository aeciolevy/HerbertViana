import React, { lazy } from 'react';
import DivFlex from '../components/styled/DivFlex';
import Footer from '../components/styled/Footer';
import MainContent from '../components/About/MainContent';
import UniversityIcons from '../components/About/UniversityIcons';
import FooterAbout from '../components/About/FooterAbout';

const ContainerWithBackground = lazy(() => import( /* webpackChunkName: "MainContainer" */
    '../components/styled/ContainerWithBackground'));
const Navbar = lazy(() => import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar'));

const About = () => {
    return(
        <div>
            <ContainerWithBackground height="40vh">
                <Navbar />
            </ContainerWithBackground>
            <DivFlex width="100vw" height="68vh" flow="column"
                style={{ position: 'absolute', top: '9.25rem', backgroundColor: 'white' }}>
                <MainContent />
                <DivFlex flow="row" justify="center" style={{ maxHeight: '12rem'}}>
                    <UniversityIcons />
                </DivFlex>
            </DivFlex>
            <Footer position="fixed" width="100%" height="5.25rem">
                <FooterAbout />
            </Footer>
        </div>
    );
};

export default About;
