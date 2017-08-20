import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Col, Button } from 'react-bootstrap'

const Content = props => (
  <div>
    <Col md={props.size}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
      <Button bsStyled="default">View Detail »</Button>
    </Col>
  </div>
)

export default Content
