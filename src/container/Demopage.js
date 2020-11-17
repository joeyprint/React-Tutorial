import React from 'react'
import { compose, withHandlers } from 'recompose'
import Navbar from '../component/Navbar'
import Content from '../component/Content'
import { Grid, Row, Jumbotron, Button } from 'react-bootstrap'

const Demo = props => (
  <div>
    <Navbar />
    <Jumbotron>
      <Grid bsClass="container">
        <h1>Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron
         and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <Button bsStyle="primary">Learn more »</Button>
      </Grid>
    </Jumbotron>
    <Grid bsClass="container">
      <Row>
        <Content title="Heading" size={4} >
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.</p>
        </Content>
        <Content title="Heading" size={4} >
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.</p>
        </Content>
        <Content title="Heading" size={4} >
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.</p>
        </Content>
        <Content title="Heading" size={4} >
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.</p>
        </Content>
      </Row>
    </Grid>

  </div>
)

const DemoCompose = compose(

)(Demo)

export default DemoCompose
