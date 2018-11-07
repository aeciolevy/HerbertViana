import styled from 'styled-components';
import colors from './colors';

const ButtonBg = styled.button`
    background-image: ${ ({ imgSource }) => imgSource ? `url(${imgSource})` : 'unset'};
    background-size: cover;
    height: ${ ({ height }) => height ? height : '4rem'};
    width: ${ ({ width }) => width ? width : '14rem'};
    &:hover{
        border: 3px solid darkorange;
        cursor: pointer;
    }
`;

export default ButtonBg;
