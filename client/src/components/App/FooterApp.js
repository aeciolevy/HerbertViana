import React from 'react';
import Footer from '../styled/Footer';
import DivFlex from '../styled/DivFlex';
import ContainerLogo from '../styled/ContainerLogo';
import logo from '../../imgs/Logo.png';
import SocialIcons from '../Shared/SocialIcons';
import Divider from '../styled/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkIcon from '../Shared/LinkIcon';
import { SmallText } from '../styled/Typography';


const FooterApp = () => {
    return(
        <Footer margin="0" padding="2.5rem 12.45rem 3rem 12.45rem">
            <DivFlex flow="column">
                <DivFlex flow="row" width="100%">
                    <ContainerLogo bg={logo} />
                    <DivFlex flow="column" margin="0 0 0 auto">
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.25rem', 
                            color: 'white', fontWeight: 500}}> 
                            Me siga
                        </p>
                        <SocialIcons />
                    </DivFlex>
                </DivFlex>  
                <Divider />
                <DivFlex flow="row" justify="center">
                    <SmallText> 
                    Made with 
                    </SmallText>
                    <LinkIcon href="https://www.linkedin.com/in/aeciolevy/">
                        <FontAwesomeIcon icon={['far', 'heart']} color="white" />
                    </LinkIcon>
                    <SmallText> 
                    in Vancouver.
                    </SmallText>
                </DivFlex>
            </DivFlex>
        </Footer>
    );
}

export default FooterApp;
