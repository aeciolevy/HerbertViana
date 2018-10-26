import React, { lazy } from 'react';
import colors from '../styled/colors';
import DivFlex from '../styled/DivFlex';
import pcm from '../../imgs/pcm.png';
import pcmPlaceHolder from '../../imgs/pcm-placeHolder.png';
import lideranca from '../../imgs/lideranca.png';
import liderancaPlaceHolder from '../../imgs/lideranca-placeholder-8.png';
import licoes from '../../imgs/licoes.png';
import licoesPlaceHolder from '../../imgs/licoes-placeHolder.png';
import fatores from '../../imgs/fatores.png';
import fatoresPlaceHolder from '../../imgs/fatores-PlaceHolder.png';

const LazyLoadingImage = lazy(() => import(/* webpackChunkName: "LazyLoadingImage" */'../Shared/LazyLoadingImage'));

const BookItem = React.memo(function BookItem(props) {
    return (
        <DivFlex flow="row wrap" justify="space-evenly">
            <div style={{ flexShrink: '1' }}>
                <h3 style={{ fontFamily: 'Roboto', textAlign: 'center', color: `${colors.textTitle}`, fontSize: '1.875rem' }}>
                    Title Book
                </h3>
                <LazyLoadingImage img={pcm} imgPlaceHolder={pcmPlaceHolder} width={300} height={434} />
            </div>
            <div style={{ flexShrink: '1' }}>
                <h3 style={{ fontFamily: 'Roboto', textAlign: 'center', color: `${colors.textTitle}`, fontSize: '1.875rem' }}>
                    Title Book
                </h3>
                <LazyLoadingImage img={lideranca} imgPlaceHolder={liderancaPlaceHolder} width={300} height={434} />
            </div>
            <div style={{ flexShrink: '1' }}>
                <h3 style={{ fontFamily: 'Roboto', textAlign: 'center', color: `${colors.textTitle}`, fontSize: '1.875rem' }}>
                    Title Book
                </h3>
                <LazyLoadingImage img={licoes} imgPlaceHolder={licoesPlaceHolder} width={300} height={434} />
            </div>
            <div style={{ flexShrink: '1' }}>
                <h3 style={{ fontFamily: 'Roboto', textAlign: 'center', color: `${colors.textTitle}`, fontSize: '1.875rem' }}>
                    Title Book
                </h3>
                <LazyLoadingImage img={fatores} imgPlaceHolder={fatoresPlaceHolder} width={300} height={434} />
            </div>
        </DivFlex>
    );
});

export default BookItem;
