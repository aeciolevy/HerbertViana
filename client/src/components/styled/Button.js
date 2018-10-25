import styled from 'styled-components';
import colors from './colors';

const Button = styled.button`
  background: ${ ({ bgColor }) => colors[bgColor]};
  border: ${ ({ borderActive }) => borderActive ? "rgb(177, 177, 177)" : "none"};
  border-style: ${ ({ borderActive }) => borderActive ? "none solid" : "none"};
  /* border-radius: 2px; */
  color: ${ ({ fontColor }) => colors[fontColor]};
  cursor: pointer;
  display: inline-block;
  font-size: ${ ({ fontSize }) => fontSize ? fontSize : "1rem"};;
  font-family: "Roboto";
  font-weight: 700;
  line-height: ${ ({ lineHeight }) => lineHeight ? lineHeight : "40px"};
  margin: 8px 1rem;
  outline: none;
  padding: 0 1rem;
  transition: all 300ms ease;
  width: ${ ({ width }) => width ? width : "unset"};
  &:hover {
    background: ${ ({ hoverColor }) => colors[hoverColor]};
    color: ${ ({ hoverFontColor }) => colors[hoverFontColor]}
  }
`;

Button.defaultProps = {
    bgColor: 'green',
    fontColor: 'white',
    hoverFontColor: 'white',
    hoverColor: 'darkGreen',
};

export default Button;
