import React from 'react';
import DivFlex from '../styled/DivFlex';
import colors from '../styled/colors';

const BookSection = React.memo(function BookSection(props) {

    return (
        <DivFlex >
            <div style={{ width: '100%'}}>
                <h3 style={{ fontFamily: 'Roboto', textAlign: 'center', color: `${colors.textTitle}`, fontSize: '1.875rem' }}> 
                    Livros 
                </h3>
            </div>
        </DivFlex>
    );
});

export default BookSection;
