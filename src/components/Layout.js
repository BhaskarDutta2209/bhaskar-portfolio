import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"
import { Col, Container } from "react-bootstrap"

import NavigationBar from "./NavigationBar"
import FooterComponent from "./FooterComponent"

export default function Layout({ children }) {
  return (
    <Container>
      <Col>
        <NavigationBar />
        {children}
        <FooterComponent />
      </Col>
    </Container>
  )
}
