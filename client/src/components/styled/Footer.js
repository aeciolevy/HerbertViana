import styled from 'styled-components';
import colors from './colors';

const Footer = styled.footer`
    background-color: ${( {background} ) => background ?  background : `${colors.green}`};
    height: ${( {height} ) => height ? height : '20.75rem'};
    width: ${( {width} ) => width ? width : 'unset'};
    margin: ${( {margin} ) => margin ? margin : '0'};
    padding: ${( {padding} ) => padding ? padding : '0'};
    position: relative;
    bottom: 0;
`;

export default Footer;
