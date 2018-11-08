import React from 'react';
import DivFlex from '../styled/DivFlex';
import SocialIcons from '../Shared/SocialIcons';
import MadeWith from '../Shared/MadeWith';

const FooterAbout = () => {
    return(
        <DivFlex alignItems="center" height="inherit" justify="space-around">
            <DivFlex width="10%"/>
            <MadeWith />
            <SocialIcons />
        </DivFlex>
    );
}

export default FooterAbout;
