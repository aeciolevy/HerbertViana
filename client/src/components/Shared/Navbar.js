import React, {lazy} from 'react';
import logo from '../../imgs/Logo.png';
import ContainerLogo from '../styled/ContainerLogo';
import LinkContainer from './LinkContainer';
import Link from 'react-router-dom/Link';

const DivFlex = lazy(() => import( /* webpackChunkName: "DivFlex" */
    '../styled/DivFlex'));

const Navbar = () => {
    return(
        <DivFlex width="100%">
            <Link to="/">
                <ContainerLogo bg={logo} />            
            </Link>
            <LinkContainer />
        </DivFlex>
    );
};

export default Navbar;
