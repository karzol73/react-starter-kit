import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { LAYOUT } from "../../styles/constants"
import { Text } from "../../styles/typo"
import { Container } from "../../styles/layout"
import Hamburger from "./Hamburger"
import Toggle from "../darkMode"

const NavContainer = styled.div`
    position: fixed;
    top: -70px;
    left: 0;
    height: 70px;
    width: 100%;
    background: var(--clr-light);
    transition: top ${LAYOUT.transition} ease-in-out;
    display: flex;
    justify-content: center;
    justify-items: center;
    box-shadow: ${LAYOUT.shadow};
    z-index: 999;
    &.visible {
        top: 0;
    }
`

const Nav = ({ theme, toggleTheme }) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    function debounce(func, wait, immediate) {
        var timeout
        return function () {
            var context = this, args = arguments
            var later = function () {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            var callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)

    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    return (
        <NavContainer className={visible ? "visible" : ""}>
            <Container centerFull>
                <Text dark uppercase wide>STICKY HEADER</Text>
                <Hamburger />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </Container>
        </NavContainer>
    )
}

export default Nav