import styled from 'styled-components';
import colors from '../styled/colors';

const Typography = styled.div`
    
`;

export const H3Title = styled.h3`
    font-family: Roboto;
    font-size: 1.125rem;
    height: 4rem;
    text-align: center;
    max-width: 18.75rem;
    color: ${colors.textTitle};
`;

export const BookDescription = styled.p`
    max-width: 18.75rem;
    line-height: 1.6875rem;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.875rem;
    color: ${colors.textNormal};
`;

export const SmallText = styled.p`
    color: white;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: small;
    margin: ${( { margin }) => margin ? margin : '0'};
    padding: ${({ padding }) => padding ? padding: '0 0.3rem'};
`;
