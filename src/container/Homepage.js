import React from 'react'
import {compose, withHandlers, withState} from 'recompose'
import {Button, Form, FormGroup, FormControl} from "react-bootstrap"

const Homepage = props => (
  <div>
    <h1>{props.getTitle("Increase Number Web")}</h1>
    <br/>
    <Form inline action="" onSubmit={props.setDefault}>
      <FormGroup id="inputNumber">
        <FormControl type="text" id="default"/>
        <Button bsStyle="primary">OK</Button>
      </FormGroup>
    </Form>
    <br/>
    <p>{props.number}</p>
    <Button bsStyle="primary" onClick={props.increase}>Increase</Button>
    <Button bsStyle="primary" onClick={props.decrease}>Decrease</Button>
  </div>
)

const HomepageCompose = compose(
  withState('number', 'setNumber', 0),
  withHandlers({
    getTitle : props => title => title,
    increase : props => () => {
      console.log("increase")
      props.setNumber(props.number + 1)
    },
    decrease : props => () => {
      props.setNumber(props.number - 1)
    },
    setDefault : props => (e) => {
      e.preventDefault()
      props.setNumber(e.target.default.value - 0)
      e.target.default.value = ''
    },
  })
)(Homepage)

export default HomepageCompose
