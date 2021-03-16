import React from 'react'
import {Container
} from './styled'

const Navbar = () => {

    return(
        <Container>
            <h1>
                <a href="/">
                <img src="assets/Logo.svg" alt="Logo" />
                </a>
            </h1>
            <ul>
                <li><a href="/teams">Teams</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </Container>
    )
}

export default Navbar