import styled from 'styled-components';

const PolygonBooks = styled.div`
    background-color: #FAFAFA;
    width: 100vw;
    height: 50rem;
    -webkit-clip-path: polygon(0 22%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);
`;

export default PolygonBooks;
