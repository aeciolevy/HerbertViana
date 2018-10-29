import React from 'react';
import DivFlex from '../styled/DivFlex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkIcon from '../Shared/LinkIcon';

const SocialIcons = () => {
    return(
        <DivFlex flow="row" justify="space-between" width="12.25rem">
            <LinkIcon href="https://www.facebook.com/herbert.viana.355/" className="fa-layers fa-fw">
                <FontAwesomeIcon icon={["far", "circle"]} color="white" size="3x"/>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" color="white" 
                    transform="shrink-3 right-7"
                />
            </LinkIcon>
            <LinkIcon href="https://www.instagram.com/herbertviana2016/" className="fa-layers fa-fw">
                <FontAwesomeIcon icon={["far", "circle"]} color="white" size="3x"/>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="white" 
                    transform="shrink-4 right-5"
                />
            </LinkIcon>
            <LinkIcon href="https://www.linkedin.com/in/herbert-viana-a248936a/" className="fa-layers fa-fw">
                <FontAwesomeIcon icon={["far", "circle"]} color="white" size="3x"/>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="white" 
                    transform="shrink-4 right-5"
                />
            </LinkIcon>
        </DivFlex>
    );
};

export default SocialIcons;
