import styled from 'styled-components';
import media from 'styled-media-query';

const ContainerLogo = styled.div`
    width: 10.25rem;
    height: 6.25rem;
    flex: initial;
    background-image: ${ ({ bg}) => bg ? `url(${bg})` : 'unset'};
    background-size: contain;
    ${media.lessThan("medium")`
        display: none;
    `}
    
`;

export default ContainerLogo;
