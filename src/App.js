import React from 'react'
import Home from './container/Homepage'
import Demo from './container/Demopage'
import { compose } from 'recompose'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { injectGlobal } from 'styled-components'

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={Demo} />
    </div>
  </Router>
)

injectGlobal ([`
  body {
    background-color : #efefef;
    margin : 0px;
    padding : 0px;
  }
`])

const AppCompose = compose(

)(App)

export default AppCompose
