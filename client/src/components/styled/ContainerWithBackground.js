import styled from 'styled-components';
import media from 'styled-media-query';
import bg from '../../imgs/BG-8.png';
import bgMobile from '../../imgs/bg-mobile-8.png';

const ContainerWithBackground = styled.div`
    background-image: url(${bg});
    background-size: cover;
    padding: 23px 16%;
    

    ${media.lessThan("small")`
        background-image: url(${bgMobile});
    `}
`;

export default ContainerWithBackground;
