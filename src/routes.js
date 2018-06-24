import * as React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import createHashHistory from 'history/createHashHistory';
//
// const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()

import App from './App'
import Pii from './components/Course/Pii'
import Privacy from './components/Course/Privacy'
import Law from './components/Course/Law'
import Rights from './components/Course/Rights'
import Risks from './components/Course/Risks'

import CaseFacebook from './components/Course/CaseFacebook'
import CaseStrava from './components/Course/CaseStrava'
import CaseTinderGrindr from './components/Course/CaseTinderGrindr'

import Results from './components/Course/Results'


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/privacy'} component={Privacy}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/pii'} component={Pii}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/law'} component={Law}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/rights'} component={Rights}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/risks'} component={Risks}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/case-facebook'} component={CaseFacebook}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/case-tinder-grindr'} component={CaseTinderGrindr}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/case-strava'} component={CaseStrava}/>
        <Route exact path={process.env.PUBLIC_URL + '/course/results'} component={Results}/>
      </Switch>
    </BrowserRouter>
  )
}
