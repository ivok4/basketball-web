import React from 'react'
import {Container
} from './styled'

const Navbar = () => {

    return(
        <Container>
            <h1>
                <a href="./">
                <img src="assets/NBA-logo.png" alt="Logo" />
                </a>
            </h1>
            <ul>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Players</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </Container>
    )
}

export default Navbar