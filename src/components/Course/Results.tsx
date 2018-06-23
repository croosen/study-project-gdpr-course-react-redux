import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

// import { store } from '../../store'

import { allQuestions as questions } from '../../questions/questions'

interface IStateProps {
  course?: any
  submission: any
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
    const { submission } = this.props
    global.console.log(submission.casefb_01)
    global.console.log(questions)

    // TODO work in progress
    // check on correct answers and put in state
    // output list with question + result
    questions.map((question: any) => {
      if (question.id === submission[question.id]) {

        global.console.log(submission.key)
        global.console.log('vvv')

        if (question.correctAnswer === submission) {
          this.setState({
            listResults: this.state.listResults.concat([question.id])
          })
        }
      }
    })
  }

  public render() {
    const results = this.state.listResults

    return (
      <Frame>
        <h1>Resultaten</h1>
        Je krijgt nu een sticker

        {
          results.map((r: any, key: any) => {
            return (<div key={key}>Result {r}</div>)
          })
        }

        { results }

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
    submission: state.session.courseSubmissions,
    username: state.session.username,
  }
}

export default connect(mapStateToProps)(Results)
