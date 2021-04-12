import React from 'react'
import { Container, Divider } from "../styles/layout"
import { Button } from "../styles/elements"

function Buttons () {
    return (
        <Container>
            <Button framed>
                <a href="/">Light Button</a>
            </Button>
            <Divider />
            <Button>
                <a href="/">Dark Button</a>
            </Button>
            <Divider />
            <Button colored>
                <a href="/">Colored Button</a>
            </Button>
            <Divider large />
        </Container>
    )
}

export default Buttons