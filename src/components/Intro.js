import React from "react"
import Typical from "react-typical"
import { Col } from "react-bootstrap"

export default function Intro() {
  return (
    <Col xs="11">
      {/* <h1 className="intro">
        Hi, this is Bhaskar Dutta, a solftware developer and researcher.
      </h1> */}
      <Typical
        steps={[
            "Hello, this is Bhaskar Dutta",
            1000,
            "I am a Software Developer and Researcher",
            1000
        ]}
        loop={Infinity}
        wapper="h1" 
        className="intro"
      />
    </Col>
  )
}
