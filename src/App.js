import React from 'react'
import {compose, withHandlers, withState} from 'recompose'
import Home from './container/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = props => (
  <Home/>
)

const AppCompose = compose(

)(App)

export default AppCompose
