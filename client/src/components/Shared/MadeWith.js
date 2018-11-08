import React from 'react';
import DivFlex from '../styled/DivFlex';
import { SmallText } from '../styled/Typography';
import LinkIcon from './LinkIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MadeWith = () => {
    return(
        <DivFlex flow="row" justify="center">
            <SmallText>
                Made with
            </SmallText>
            <LinkIcon href="https://www.linkedin.com/in/aeciolevy/">
                <FontAwesomeIcon icon={['fas', 'heart']} color="white" />
            </LinkIcon>
            <SmallText>
                in Vancouver.
            </SmallText>
        </DivFlex>
    )
};

export default MadeWith;
