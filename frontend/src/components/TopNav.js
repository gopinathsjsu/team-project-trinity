import React from 'react'
import '../App.css'
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
const TopNav = () => {
    return (
        <Navbar sticky="top" bg="light" variant="light">
            <Container className="navbar-wrapper">
                <Nav>
                    <Image src="https://img.icons8.com/pastel-glyph/64/000000/warning-triangle.png" alt="logo" />
                    <Navbar.Brand href="/" ><b>Trinity Hotels</b></Navbar.Brand>
                </Nav>

                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile/">My Reservations</Nav.Link>
                    <Nav.Link href="/signIn">Sign In</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default TopNav