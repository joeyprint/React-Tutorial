import React from 'react'
import {compose, withHandlers} from 'recompose'
import Navbar from '../component/Navbar'
import Content from '../component/Content'

const Demo = props => (
  <div>
    <Navbar />
    <Content />
  </div>
)

const DemoCompose = compose(

)(Demo)

export default DemoCompose
