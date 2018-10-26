import React, { lazy } from 'react';


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
        </div>
    );
};

export default About;
