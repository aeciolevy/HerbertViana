import styled from 'styled-components';
import media from 'styled-media-query';

const ContainerLogo = styled.div`
    width: 10.25rem;
    height: 6.25rem;
    background-image: ${ ({ bg}) => bg ? `url(${bg})` : 'unset'};
    background-size: contain;
    ${media.lessThan("small")`
        display: none;
    `}
    
`;

export default ContainerLogo;
