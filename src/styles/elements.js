import styled from "styled-components"
import { LAYOUT, TYPEFACE, mq } from "./constants"

const Button = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--margin) * 1.5);
  width: 100%;
  ${mq.md} {
    width: calc(var(--spacer) * 20);
  };
  padding: calc(var(--spacer) * 1) calc(var(--spacer) * 1.5);
  border-radius: ${props => (props.rounded ? "50px" : "0")};
  box-shadow: ${props => (props.shadow ? `${LAYOUT.shadow}` : "")};
  color: ${props => (props.colored ? "var(--clr-light)" : props.framed ? "var(--clr-dark)" : "var(--clr-light)")};
  background: ${props => (props.colored ? "var(--clr-colored)" : props.framed ? "transparent" : "var(--clr-dark)")};
  border: ${props => (props.framed ? "var(--border) solid var(--clr-dark)" : "")};
  cursor: pointer;
  &:hover{
    a {
      letter-spacing: calc(${LAYOUT.letterSpacing}*1.2) 
      };
  };

  a {
    letter-spacing: normal;
    font-size: calc(var(--fs) * 0.8);
    text-transform: normal;
    line-height: 0;
    font-weight: ${TYPEFACE.bold};
    font-family: ${TYPEFACE.header};
    text-transform: uppercase;
    text-align: center;
    letter-spacing: calc(${LAYOUT.letterSpacing}*0.5);
    transition: letter-spacing ${LAYOUT.transition} ease-in-out;
  }

`

export { Button }