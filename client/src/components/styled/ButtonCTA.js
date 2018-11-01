import styled from 'styled-components';
import media from 'styled-media-query';

const ButtonCTA = styled.button`
    border: 1px solid white;
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    height: 3rem;
    font-family: Roboto;
    text-align: center;
    width: 10rem;

    &:hover, &:focus {
        transition: all 0.5;
        color: rgb(226, 226, 226);
        border: 1px solid rgb(226, 226, 226);
    }

    ${media.lessThan("medium")`
        display: none;
    `}
`;

export default ButtonCTA;
