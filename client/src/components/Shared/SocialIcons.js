import React from 'react';
import DivFlex from '../styled/DivFlex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkIcon from '../Shared/LinkIcon';
import {newWindow} from '../../utils/newWindow'; 
import { SOCIAL_LINKS } from '../../utils/constants'; 

const SocialIcons = () => {
    return(
        <DivFlex flow="row" justify="space-between" width="12.25rem">
            <LinkIcon onClick={() => newWindow(SOCIAL_LINKS.FACEBOOK)} className="fa-layers fa-fw">
                <FontAwesomeIcon icon={["far", "circle"]} color="white" size="3x"/>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" color="white" 
                    transform="shrink-3 right-7"
                />
            </LinkIcon>
            <LinkIcon onClick={() => newWindow(SOCIAL_LINKS.INSTAGRAM)} className="fa-layers fa-fw">
                <FontAwesomeIcon icon={["far", "circle"]} color="white" size="3x"/>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="white" 
                    transform="shrink-4 right-5"
                />
            </LinkIcon>
            <LinkIcon onClick={() => newWindow(SOCIAL_LINKS.LINKEDIN)} className="fa-layers fa-fw">
                <FontAwesomeIcon icon={["far", "circle"]} color="white" size="3x"/>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="white" 
                    transform="shrink-4 right-5"
                />
            </LinkIcon>
        </DivFlex>
    );
};

export default SocialIcons;
