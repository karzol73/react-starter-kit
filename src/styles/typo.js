import styled, { css } from "styled-components"
import { LAYOUT, TYPEFACE } from "./constants"

const Text = styled.p `
    font-family: ${props => (props.header ? `${TYPEFACE.header}` : `${TYPEFACE.body}`)};
    font-size: var(--fs);
    line-height: calc(var(--fs) * var(--fr));
    font-weight: ${props => (props.bold ? `${TYPEFACE.bold}` : `${TYPEFACE.normal}`)};
    font-style: ${props => (props.italic ? `${TYPEFACE.italic}` : "normal")};
    text-align: ${props => (props.center ? "center" : props.justify ? "justify" : props.justify ? "right" : "left")};
    text-transform: ${props => (props.uppercase ? "uppercase" : "normal")};
    letter-spacing: ${props => (props.wide ? `${LAYOUT.letterSpacing}` : "normal")};
    color: ${props => (props.light ? "var(--clr-light)" : props.colored ? "var(--clr-colored)" : "var(--clr-dark)")};
    text-shadow: ${props => (props.shadow ? `${LAYOUT.shadow}` : "")};

    ${props =>
        props.middle && css `
        font-size: calc(var(--fs) * var(--fr));
        line-height: calc(var(--fs) * (var(--fr) * 2));
        `}
    
    ${props =>
        props.large && css `
        font-size: calc(var(--fs) * (var(--fr) * 2));
        line-height: calc(var(--fs) * (var(--fr) * 3));
        `}

    ${props =>
        props.huge && css `
        font-size: calc(var(--fs) * (var(--fr) * 3));
        line-height: calc(var(--fs) * (var(--fr) * 4));
        `}

    ${props =>
        props.blocknote && css `
        border-left: var(--border) solid var(--clr-colored);
        padding-left: var(--spacer);
        font-style: italic;
        `}

    ${props =>
        props.clamp && css `
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        `}

`

const Link = styled(Text).attrs({ as: "a"}) `
  cursor: pointer;
  opacity: 1;
  transition: opacity ${LAYOUT.transition} ease-in-out;
  &:hover {
    opacity: var(--opacity)
  }

  ${props =>
        props.animated && css `
            position: relative;
            &:before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                height: 0;
                width: 100%;
                background: var(--clr-dark);
                transition: height ${LAYOUT.transition} ease-in-out;
                opacity: 0.4   
            };
            &:hover:before {
                height: calc(var(--spacer)/1.5);
            }
        `}

`

export { Text, Link }