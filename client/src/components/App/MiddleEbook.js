import React, { lazy, Suspense } from 'react';
import ebook from '../../imgs/e-book.png';
import ebookplaceholder from '../../imgs/e-book-placeholder-8.png';
import DivFlex from '../styled/DivFlex';
import logo2 from '../../imgs/Logo2.png';
import logo2placeholder from '../../imgs/logo2-placeholder-8.png';

const LazyLoadingImage = lazy(() => import(/* webpackChunkName: "LazyLoadingImage" */ 
    '../Shared/LazyLoadingImage'));

const MiddleEbook = () => {
    return (
        <Suspense fallback={<div> Loadding ...</div>}>
            <DivFlex style={{ marginTop: '15rem', border: '1px solid red'}}>
                <LazyLoadingImage img={ebook} imgPlaceHolder={ebookplaceholder} duration={2} />
                <DivFlex>
                    <LazyLoadingImage img={logo2} imgPlaceHolder={logo2placeholder} 
                        width={200} height={200}
                    />
                </DivFlex>
            </DivFlex>
        </Suspense>
    );
};

export default MiddleEbook;
