import React from 'react';
import DivFlex from '../styled/DivFlex';
import PictureAndLinks from './PictureAndLinks';

const MainContent = React.memo(function MainContent() {
    return(
        <DivFlex flow="row" width="100%" padding="2rem 8rem 0 8rem">
            <DivFlex flow="column"  width="30%"  style={{ backgroundColor: 'red'}}>
                <PictureAndLinks />
            </DivFlex>
            <DivFlex flex="1" style={{ backgroundColor: 'blue' }}>

            </DivFlex>
        </DivFlex>
    );    
});

export default MainContent;
