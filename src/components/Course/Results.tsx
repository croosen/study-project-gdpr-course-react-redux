import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import struis01 from '../../assets/results/struis-01.jpg'

import { allQuestions as questions } from '../../questions/questions'

interface IStateProps {
  course?: any
  submissions: any
  username?: string
}

interface IOwnState {
  listResults: any,
}

interface IOwnProps {
  onClick?: () => void,
}

type IProps = IStateProps & IOwnProps & IOwnState

class Results extends React.Component<IProps> {

  public state: IOwnState = {
    listResults: []
  }

  public componentWillMount() {
    const { submissions } = this.props

    const arr = Array()
    questions.map((question: any) => {
      Object.keys(submissions).forEach((key) => {
        if (question.id === key && question.correctAnswer === submissions[key]) {
          arr.push([question.id, question.advice])
        }
      });
    })
    this.setState({
      listResults: arr
    })
  }

  public render() {
    const results = this.state.listResults

    return (
      <Frame>
        <h1>Jouw Struisvogel score</h1>

        <div className="image">
          <img src={struis01} alt="" />
        </div>

        <div className="score">
          {(results.length <= 2) &&
              <div>
                <h2>Je scoort een 3:</h2>
                <p>Je steekt je kop nog te vaak in het zand, wees geen Struisvogel en steek je kop wat vaker omhoog</p>
              </div>
          }

          {(results.length > 2 && results.length <= 5) &&
              <div>
                <h2>Je scoort een 5:</h2>
                <p>Je hebt nog regelmatig je kop in het zand, maar kijkt ook af en toe wat er boven het zand gebeurt</p>
              </div>
          }

          {(results.length > 6 && results.length <= 8) &&
              <div>
                <h2>Je scoort een 7:</h2>
                <p>Jouw kop bevindt zich vaker boven het zand dan in het zand, probeer nog vaker je kop uit het zand te houden</p>
              </div>
          }

          {(results.length > 9) &&
              <div>
                <h2>Je scoort een 9:</h2>
                <p>Gefeliciteerd! Jij bent geen Struisvogel! Probeer toch altijd alert en kritisch te blijven</p>
              </div>
          }
        </div>

        <div className="advice">
          <h3>Jouw advies</h3>
          {
            results.map((r: any, key: any) => {
              return (
                <div className="advice_content" key={key}>{r[1]}</div>
              )
            })
          }
        </div>

        <div className="navigator">
          <Link to={process.env.PUBLIC_URL + '/course/case-strava'} className="navigator_button button-prev">Prev</Link>
        </div>
      </Frame>
    )
  }
}

function mapStateToProps(state: any, ownProps: any): IStateProps {
  return {
    course: state.course.course,
    submissions: state.session.courseSubmissions,
    username: state.session.username,
  }
}

export default connect(mapStateToProps)(Results)
