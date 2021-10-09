import { Link } from "gatsby"
import React from "react"
import { Col } from "react-bootstrap"

export default function IntroDefination() {
  return (
    <Col xs="9">
      <p className="details">
        I specialize in desiging and building blockchain based applications. I
        talk about my work on{" "}
        <Link
          to="https://www.linkedin.com/in/itsbhaskardutta/"
          target="_blank"
          className="linkedin"
        >
          LinkedIn
        </Link>
        , commit code to{" "}
        <Link to="https://github.com/BhaskarDutta2209" className="github">
          Github
        </Link>{" "}
        and chat on{" "}
        <Link to="https://wa.me/917439146638" className="whatsapp">
          Whatsapp
        </Link>
      </p>
    </Col>
  )
}
