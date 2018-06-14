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

          <h1>Hallo! Dit is een cursus over Privacy</h1>

          <p className="intro font-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet risus nunc. Curabitur quis lorem quis risus maximus imperdiet. In porttitor sodales ullamcorper. Pellentesque imperdiet pharetra finibus. Vivamus pretium turpis justo. Praesent pretium.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet risus nunc. Curabitur quis lorem quis risus maximus imperdiet. In porttitor sodales ullamcorper. Pellentesque imperdiet pharetra finibus. Vivamus pretium turpis justo. Praesent pretium, dui pretium condimentum pretium, lectus purus ultrices magna, in bibendum urna sem id nunc. Etiam venenatis lectus ut diam aliquet, in finibus leo mollis. Sed consectetur felis nec augue blandit, vel dapibus massa convallis. Proin id porta nisi. Ut a quam mi. Nulla fermentum nulla nunc, nec egestas metus cursus in.</p>

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
