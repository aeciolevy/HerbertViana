import React, { lazy, Suspense } from 'react';
import ebook from '../../imgs/e-book.png';
import ebookplaceholder from '../../imgs/e-book-placeholder-8.png';
import DivFlex from '../styled/DivFlex';
import logo2 from '../../imgs/Logo2.png';
import logo2placeholder from '../../imgs/logo2-placeholder-8.png';
import Button from '../styled/Button';
import color from '../styled/colors';

const LazyLoadingImage = lazy(() => import(/* webpackChunkName: "LazyLoadingImage" */
    '../Shared/LazyLoadingImage'));

const MiddleEbook = () => {
    return (
        <Suspense fallback={<div> Loadding ...</div>}>
            <DivFlex style={{ marginTop: '15rem' }}>
                <LazyLoadingImage img={ebook} imgPlaceHolder={ebookplaceholder} duration={2} />
                <DivFlex flow="column" alignItems="center" style={{ marginTop: '6rem', marginLeft: '5rem' }}>
                    <LazyLoadingImage img={logo2} imgPlaceHolder={logo2placeholder}
                        width={313} height={196}
                    />
                    <Button lineHeight="5.5rem" fontSize="1.75rem" width="28.125rem">
                        Baixe seu E-Book
                    </Button>
                    <div style={{ width: "28.125rem", zIndex: 2}}>
                        <p style={{ lineHeight: '1.6875rem', color: `${color.textNormal}`}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vivamus rutrum a diam vel porttitor. 
                            Nullam eu urna nisl. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
                            Curae; 
                            Mauris vel felis et diam vestibulum fermentum id et augue. 
                            Massa ornare risus mattis rhoncus. 
                            Quisque pretium vulputate eros, a mollis enim maximus at. 
                            Nam placerat sollicitudin lobortis. 
                            Sed eros erat, varius a convallis non, porttitor eget turpis. 
                            Suspendisse et ligula pellentesque, accumsan orci ut, egestas enim. Vivamus scelerisque odio a nulla ornare venenatis.
                        </p>
                    </div>
                    
                </DivFlex>
            </DivFlex>
        </Suspense>
    );
};

export default MiddleEbook;
