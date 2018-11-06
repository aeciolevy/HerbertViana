import React from 'react';
import LazyLoadingImage from '../Shared/LazyLoadingImage';
import DivFlex from '../styled/DivFlex';
import profile from '../../imgs/profile_mobile.svg';
import profilePlaceholder from '../../imgs/profile-laceholder-8.png';

const PictureAndLinks = React.memo(function PictureAndLinks() {
    return(
        <DivFlex width="100%" alignItems="center">
            <LazyLoadingImage img={profile} imgPlaceHolder={profilePlaceholder}  />
        </DivFlex>
    );
});

export default PictureAndLinks;
