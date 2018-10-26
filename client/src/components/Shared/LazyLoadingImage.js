import React from 'react';
import PropTypes from 'prop-types';
import { SimpleImg, SimpleImgProvider } from 'react-simple-img';

const LazyLoadingImage = React.memo(function LazyLoadingImage(props){
    const { threshold, img, imgPlaceHolder, duration, height, width } = props;
    return (
        <SimpleImgProvider
            config={{ threshold: [threshold || 0.5] }}
        >
            <SimpleImg
                height={height || '100%'}
                width={width || 500}
                animationDuration={duration || 1}
                placeholder={imgPlaceHolder}
                src={img}
            />
        </SimpleImgProvider>
    );
});

LazyLoadingImage.propTypes = {
    // image to be loaded
    img: PropTypes.string.isRequired,
    // placeholder image to be loaded first
    imgPlaceHolder: PropTypes.string.isRequired,
};

export default LazyLoadingImage;
