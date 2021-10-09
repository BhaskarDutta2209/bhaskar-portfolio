import React from "react"
import { Card, Col } from "react-bootstrap"

export default function FooterComponent() {
  return (
    <Col>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Footer</Card.Title>
          <Card.Text>This is a test footer</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
