import React from 'react'
import {compose, withHandlers} from 'recompose'
import Navbar from '../component/Navbar'

const Demo = props => (
  <div>
    <Navbar />
  </div>
)

const DemoCompose = compose(

)(Demo)

export default DemoCompose
