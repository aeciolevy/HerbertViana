import React from 'react';
import ebook from '../../imgs/e-book.png';
import ebookplaceholder from '../../imgs/e-book-placeholder-8.png';
import { SimpleImg, SimpleImgProvider } from 'react-simple-img';
import DivFlex from '../styled/DivFlex';

const MiddleEbook = () => {
    return (
        <DivFlex style={{ marginTop: '15rem'}}>
            <SimpleImgProvider
                config={{ threshold: [0.6]}}
            > 
                <SimpleImg 
                    duration={2}
                    placeholder={ebookplaceholder}
                    src={ebook}
                />
            </SimpleImgProvider>
            <DivFlex>

            </DivFlex>
        </DivFlex>
    );
};

export default MiddleEbook;
