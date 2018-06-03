import * as React from 'react';

import { Router, Route, Switch, Link } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import App from './App'
import Pii from './components/Course/Pii'
import Privacy from './components/Course/Privacy'


export default () => {
  return (
     <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/course/privacy' component={Privacy}/>
        <Route path='/course/pii' component={Pii}/>
      </Switch>
     </Router>
  )
}
