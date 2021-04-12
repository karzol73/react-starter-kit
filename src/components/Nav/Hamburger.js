import React, { useState } from 'react'
import styled from "styled-components"
import { LAYOUT, mq } from "../../styles/constants"

const Burger = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    svg {
        height: 2rem;
        stroke: var(--clr-dark);
        stroke-width: 2;
        opacity: 1;
        transform: translateX(0);
        transition: all ${LAYOUT.transition} ease-in-out;
        &.close {
            opacity: 1;
            transform: translateX(0);
            ${mq.xxl} {
                opacity: 0;
                transform: translateX(-6rem)
            };
        }
    }   
`

const SideNav = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 0;
    height: 100%;
    background: var(--clr-light);
    box-shadow: 5px 0px 15px 0px rgba(50, 50, 46, 0.26);
    transition: all ${LAYOUT.transition} ease-in-out;
    overflow-y: hidden;
    svg {
        position: absolute;
        top: var(--spacer);
        right: var(--spacer);
        height: 2rem;
        stroke: var(--clr-dark);
        stroke-width: 2; 
        cursor: pointer; 
    };
    &.open {
        width: 100%;
        ${mq.sm} {
            width: 75%;
        };
        ${mq.lg} {
            width: 50%;
        };
        ${mq.xl} {
            width: 25%;
        }
    };
`

const Hamburger = () => {

    const [burger, setBurger] = useState(false)
    const handleBurger = () => {
        setBurger(!burger)
    }

return (
    <div>  
        <Burger onClick={handleBurger}>
            <svg className={burger ? "close" : ""} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </Burger>
        <SideNav className={burger ? "open" : ""}>
            <svg onClick={handleBurger} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </SideNav >
    </div>
)
}

export default Hamburger