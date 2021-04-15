import React, { useState } from 'react'
import styled from "styled-components"
import { LAYOUT, mq } from "../../styles/constants"
import { HiMenu, HiOutlineX } from "react-icons/hi"

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
        stroke: var(--clr-dark);
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
    z-index: 1000;
    svg {
        position: absolute;
        top: var(--spacer);
        right: var(--spacer);
        stroke: var(--clr-dark);
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
            <HiMenu size="2rem" className={burger ? "close" : ""} />
        </Burger>
        <SideNav className={burger ? "open" : ""}>
            <HiOutlineX size="2rem" onClick={handleBurger} />
        </SideNav >
    </div>
)
}

export default Hamburger