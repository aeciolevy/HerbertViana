import React from 'react';
import LazyLoadingImage from '../Shared/LazyLoadingImage';
import profile from '../../imgs/profile_mobile.svg';
import ButtonBg from '../styled/ButtonBg';
import linkedin from '../../imgs/bt_linkedin.png';
import lattes from '../../imgs/bt_lattes.png';
import LinkIcon from '../Shared/LinkIcon';
import { newWindow } from '../../utils/newWindow';
import { SOCIAL_LINKS } from '../../utils/constants';

const PictureAndLinks = React.memo(function PictureAndLinks() {
    return(
        <>
            <LazyLoadingImage img={profile} imgPlaceHolder={profile} width="200"  />
            <LinkIcon onClick={() => newWindow (SOCIAL_LINKS.LINKEDIN)}>
                <ButtonBg imgSource={linkedin}  />
            </LinkIcon>
            <LinkIcon onClick={() => newWindow(SOCIAL_LINKS.LATTES)}>
                <ButtonBg imgSource={lattes} />
            </LinkIcon>
        </>
    );
});

export default PictureAndLinks;
