import * as React from 'react';

import { connect } from 'react-redux'

import { createSession } from './store/session'

import { Frame } from './Frame'

import { store } from './store'

interface IState {
  username: string
  history?: any
}

class App extends React.Component<IState> {

  public state: IState = {
    username: '',
  }

  public render() {

    return (
      <Frame>
        <div className="introduction">

          <h1>Ben jij een struisvogel?</h1>

          <p className="intro font-large">Ben jij ook een struisvogel? Iemand die online overal hetzelfde wachtwoord gebruikt, kopietjes ID via mail verstuurt, of gewoon accountinformatie in Evernote plakt? Je weet heel goed dat dit niet de meest veilige handelingen zijn. En toch doe je het. Omdat het makkelijk is, of omdat je denkt “het zal wel goed komen”.</p>

          <p>De risico’s van struisvogelgedrag zijn groot. Maar eigenlijk sta je er nooit bewust bij stil. “Mij overkomt dat niet”, is iets wat je dan denkt. Hoe groot zijn die risico’s eigenlijk? Wat zet je op het spel wanneer je zo onzorgvuldig met je eigen online privacy en veiligheid omgaat? Wat kunnen kwaadwillenden doen met jouw gegevens? En hoe makkelijk is het eigenlijk om iets te doen met andermans gegevens?</p>

          <p>Deze mini-cursus leert jou wat privacy gevoelige gegevens zijn, wat mensen ermee kunnen doen en wat je zelf kunt doen om misbruik te beperken. Wees niet langer een struisvogel!</p>

          <div className="course_cta">
            <h2>Hoe heet je?</h2>
            <div className="course_form">
              <input type="text" onChange={this.handleOnChange} autoFocus={true} />
              <button className="course_button" onClick={this.handleSubmit}>
                Start de cursus
              </button>
            </div>
          </div>

        </div>
      </Frame>
    )
  }

  public handleOnChange = (event: any) : void => {
    this.setState({ username: event.target.value })
  }

  public handleSubmit = () : void => {
    Promise.resolve(store.dispatch(createSession(this.state.username)))
    .then(() => this.props.history.push(process.env.PUBLIC_URL + '/course/privacy'))
  }
}

export default connect((state : any) => state)(App)
// export default App
