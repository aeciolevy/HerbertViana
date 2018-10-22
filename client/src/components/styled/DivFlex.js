import styled from 'styled-components';

const DivFlex = styled.div` 
    display: flex;
    font-family: ${({ font }) => font ? font : 'unset'};
    flex-flow: ${({ flow }) => flow ? flow : 'unset'};
    justify-content: ${({ justify }) => justify ? justify : 'unset'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'unset'};
    align-content: ${({ alignContent }) => alignContent ? alignContent : 'unset'};
    height: ${({ height }) => height ? height : 'auto'};
    width: ${({ width }) => width ? width : 'auto' };
`

export default DivFlex;
