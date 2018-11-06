import styled from 'styled-components';

const DivFlex = styled.div` 
    display: flex;
    font-family: ${({ font }) => font ? font : 'unset'};
    flex: ${({ flex }) => flex ? flex : 'unset'};
    flex-flow: ${({ flow }) => flow ? flow : 'unset'};
    justify-content: ${({ justify }) => justify ? justify : 'unset'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'unset'};
    align-content: ${({ alignContent }) => alignContent ? alignContent : 'unset'};
    height: ${({ height }) => height ? height : 'auto'};
    width: ${({ width }) => width ? width : 'unset' };
    margin: ${({ margin }) => margin ? margin : 'unset' };
    padding: ${({ padding }) => padding ? padding : '0' };
`;

export default DivFlex;
