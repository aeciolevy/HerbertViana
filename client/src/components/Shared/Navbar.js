import React from 'react';
import Async from 'react-code-splitting';
import logo from '../../imgs/Logo.png';
import ContainerLogo from '../styled/ContainerLogo';
import LinkContainer from './LinkContainer';

const DivFlex = props => <Async load={import( /* webpackChunkName: "DivFlex" */
    '../styled/DivFlex')} componentProps={props} />

const Navbar = () => {
    return(
        <DivFlex width="100%">
            <ContainerLogo bg={logo}>            
            </ContainerLogo>
            <LinkContainer />
        </DivFlex>
    );
};

export default Navbar;
