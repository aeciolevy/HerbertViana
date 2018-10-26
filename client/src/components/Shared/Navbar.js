import React, {lazy} from 'react';
import logo from '../../imgs/Logo.png';
import ContainerLogo from '../styled/ContainerLogo';
import LinkContainer from './LinkContainer';

const DivFlex = lazy(() => import( /* webpackChunkName: "DivFlex" */
    '../styled/DivFlex'));

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
