import React from "react"
import { Col, Container, Nav, Navbar, NavItem } from "react-bootstrap"

export default function NavigationBar() {
  return (
    <Col>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand" style={{color: "#ECF8FF"}}>Bhaskar Dutta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="reponsive-navbar-nav">
              <Nav className="ms-auto">
                <NavItem style={{marginRight: "1rem"}}>About</NavItem>
                <NavItem style={{marginRight: "1rem"}} className="navdisabled">Publications</NavItem>
                <NavItem style={{marginRight: "1rem"}} className="navdisabled">Experiences</NavItem>
                <NavItem style={{marginRight: "1rem"}} className="navdisabled">Awards</NavItem>
                <NavItem style={{marginRight: "1rem"}} className="navdisabled">Contact</NavItem>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  )
}
