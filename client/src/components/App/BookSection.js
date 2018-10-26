import React, { lazy } from 'react';
import DivFlex from '../styled/DivFlex';
import colors from '../styled/colors';

const BookItem = lazy(() => import(/* webpackChunkName: "BookItems" */
    './BookItem'));

const BookSection = React.memo(function BookSection(props) {

    return (
        <DivFlex >
            <div style={{ width: '100%'}}>
                <h3 style={{ fontFamily: 'Roboto', textAlign: 'center', color: `${colors.textTitle}`, fontSize: '1.875rem' }}> 
                    Livros 
                </h3>
                <BookItem />
            </div>
        </DivFlex>
    );
});

export default BookSection;
