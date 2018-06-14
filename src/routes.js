import * as React from 'react';

import { Router, Route, Switch, Link } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import App from './App'
import Pii from './components/Course/Pii'
import Privacy from './components/Course/Privacy'
import Law from './components/Course/Law'
import Rights from './components/Course/Rights'

import CaseFacebook from './components/Course/CaseFacebook'
import CaseStrava from './components/Course/CaseStrava'
import CaseTinderGrindr from './components/Course/CaseTinderGrindr'

import Results from './components/Course/Results'


export default () => {
  return (
     <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/course/privacy' component={Privacy}/>
        <Route path='/course/pii' component={Pii}/>
        <Route path='/course/law' component={Law}/>
        <Route path='/course/rights' component={Rights}/>
        <Route path='/course/case-facebook' component={CaseFacebook}/>
        <Route path='/course/case-tinder-grindr' component={CaseTinderGrindr}/>
        <Route path='/course/case-strava' component={CaseStrava}/>
        <Route path='/course/results' component={Results}/>
      </Switch>
     </Router>
  )
}
