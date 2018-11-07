import React from 'react';
import LazyLoadingImage from '../Shared/LazyLoadingImage';
import profile from '../../imgs/profile_mobile.svg';
import profilePlaceholder from '../../imgs/profile-laceholder-8.png';
import ButtonBg from '../styled/ButtonBg';
import linkedin from '../../imgs/bt_linkedin.png';
import lattes from '../../imgs/bt_lattes.png';
import LinkIcon from '../Shared/LinkIcon';

const PictureAndLinks = React.memo(function PictureAndLinks() {
    return(
        <>
            <LazyLoadingImage img={profile} imgPlaceHolder={profilePlaceholder} width="200" />
            <LinkIcon href="https://www.linkedin.com/in/herbert-viana-a248936a/">
                <ButtonBg imgSource={linkedin} style={{ marginTop: '2rem' }} />
            </LinkIcon>
            <LinkIcon href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4294128Z4">
                <ButtonBg imgSource={lattes} style={{ marginTop: '2rem'}}/>
            </LinkIcon>
        </>
    );
});

export default PictureAndLinks;
