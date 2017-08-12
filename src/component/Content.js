import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Col, Button } from 'react-bootstrap'

const Content = props => (
  <div>
    <Col md={props.size}>
      <h2>{props.getTitle}</h2>
      <p>{props.getContent}</p>
      <Button bsStyled="default">View Detail »</Button>
    </Col>
  </div>
)

// const ContentCompose = compose(
//   withHandlers({
//     getContent: props => content => content,
//   })
// )(Content)

export default Content
