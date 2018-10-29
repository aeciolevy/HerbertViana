import styled from 'styled-components';
import { siteMedia } from './globalStyle';

const PolygonBooks = styled.div`
    margin-top: 18rem;
    padding-top: 20rem;
    padding-bottom: 6.25rem;
    background-color: #FAFAFA;
    width: 100vw;
    min-height: 50rem;
    -webkit-clip-path: polygon(0 22%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 30%, 100% 0%, 100% 100%, 0% 100%);

    ${siteMedia.greaterThan("desktop")`
        clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0% 100%);
    `}
`;

export default PolygonBooks;
