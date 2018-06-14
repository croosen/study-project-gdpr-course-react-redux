import * as React from 'react';

import { HashRouter, Route, Switch, Link } from 'react-router-dom';

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
     <HashRouter history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
        <Route path={process.env.PUBLIC_URL + '/course/privacy'} component={Privacy}/>
        <Route path={process.env.PUBLIC_URL + '/course/pii'} component={Pii}/>
        <Route path={process.env.PUBLIC_URL + '/course/law'} component={Law}/>
        <Route path={process.env.PUBLIC_URL + '/course/rights'} component={Rights}/>
        <Route path={process.env.PUBLIC_URL + '/course/case-facebook'} component={CaseFacebook}/>
        <Route path={process.env.PUBLIC_URL + '/course/case-tinder-grindr'} component={CaseTinderGrindr}/>
        <Route path={process.env.PUBLIC_URL + '/course/case-strava'} component={CaseStrava}/>
        <Route path={process.env.PUBLIC_URL + '/course/results'} component={Results}/>
      </Switch>
     </HashRouter>
  )
}