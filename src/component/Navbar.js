import React from 'react';
import { compose, withHandlers } from 'recompose'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const NavbarDemo = props => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Demo</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavItem eventKey={3} href="#">Link</NavItem>
        <NavDropdown eventKey={4} href="#" title="Dropdown">
          <MenuItem eventKey={4.1}>Link</MenuItem>
          <MenuItem eventKey={4.2}>Link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <Form inline action="" onSubmit={props.setDefault}>
          <FormGroup id="inputSearch">
            <FormControl type="text" id="search" />
            <Button bsStyle="success">Search</Button>
          </FormGroup>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

const NavbarCompose = compose(
  withHandlers({
    setDefault : props => (e) => {
      e.preventDefault()
      e.target.search.value = ''
    },
  })

)(NavbarDemo)

export default NavbarCompose