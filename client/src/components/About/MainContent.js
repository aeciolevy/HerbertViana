import React from 'react';
import DivFlex from '../styled/DivFlex';
import PictureAndLinks from './PictureAndLinks';
import Biography from './Biography';

const MainContent = React.memo(function MainContent() {
    return(
        <DivFlex flow="row" width="100%" padding="2rem 0rem">
            <DivFlex flow="column" alignItems="center"width="30%">
                <PictureAndLinks />
            </DivFlex>
            <DivFlex>
                <Biography />
            </DivFlex>
        </DivFlex>
    );    
});

export default MainContent;
