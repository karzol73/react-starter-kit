import styled, { css } from "styled-components"
import { SIZE } from "./constants"

const MainContent = styled.div `
    flex: 1 0 auto
`

const Container = styled.div `
    position: relative;
    height: ${props => props.height};
    width: ${props => (props.full ? "100%" : "calc(100% - var(--margin) * 2)")};
    max-width: ${props => (props.full ? "100%" : `${SIZE.xxl}`)};
    background: ${props => (props.light ? "var(--clr-light)" : props.dark ? "var(--clr-dark)" : props.colored ? "var(--clr-colored)" : "transparent")};
    margin: 0 auto;

    ${props =>
      props.centerFull && css `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}

    ${props =>
      props.centerX && css `
        display: flex;
        flex-direction: column;
        align-items: center;
    `}

    ${props =>
      props.centerY && css `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `}

`
const Divider = styled.div `
      width: 100%;
      height: ${props => (props.large ? "calc(var(--margin) * 2)" : props.small ? "calc(var(--margin) / 2)" : "var(--margin)")};
`

const Footer = styled.div `
    width: 100%;
    background: var(--clr-dark);
    flex-shrink: 0;
`

export { MainContent, Container, Divider, Footer }