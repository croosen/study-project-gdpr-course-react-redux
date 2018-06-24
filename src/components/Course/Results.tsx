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
        if (question.id === key && question.correctAnswer !== submissions[key]) {
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
    const score = 12 - results.length

    return (
      <Frame>
        <h1>Jouw Struisvogel score</h1>

        <div className="image">
          <img src={struis01} alt="" />
        </div>

        <div className="score">
          {(score <= 2) &&
              <div>
                <h2>Je scoort een 3:</h2>
                <p>Je steekt je kop nog te vaak in het zand, wees geen Struisvogel en steek je kop wat vaker omhoog!</p>
              </div>
          }

          {(score > 2 && score <= 5) &&
              <div>
                <h2>Je scoort een 5:</h2>
                <p>Je steekt nog regelmatig je kop in het zand, maar kijkt ook af en toe wat er boven het zand gebeurt. Wees kritischer op de informatie die je deelt!</p>
              </div>
          }

          {(score > 6 && score <= 8) &&
              <div>
                <h2>Je scoort een 7:</h2>
                <p>Jouw kop bevindt zich vaker boven het zand dan in het zand, maar probeer nog vaker je kop uit het zand te houden!</p>
              </div>
          }

          {(score > 9) &&
              <div>
                <h2>Je scoort een 9:</h2>
                <p>Gefeliciteerd! Jij bent geen Struisvogel. Probeer toch altijd alert en kritisch te blijven!</p>
              </div>
          }
        </div>

        {results.length > 0 &&
          <div className="advice">
            <h3>Jouw advies:</h3>
            {
              results.map((r: any, key: any) => {
                return (
                  <div className="advice_content" key={key}>{r[1]}</div>
                )
              })
            }
          </div>
        }

        {results.length === 0 &&
          <div className="advice">
            <h3>Jouw advies</h3>
            <div className="advice_content">
              Blijf altijd nadenken en blijf altijd kritisch. Wees jezelf altijd bewust van de data die je deelt, waar deze data terecht komt en wat de gevolgen kunnen zijn als deze data in verkeerde handen komt. Omdat jij geen Struisvogel bent, probeer ook anderen te leren hoe om te gaan met online privacy en persoonsgegevens.
            </div>
          </div>
        }

        <div className="sources">
          <h3>Hulp bij privacy</h3>
          <p>Wil je meer lezen en weten over privacy, persoonsgegevens, de nieuwe AVG en wat jij kunt doen om je privacy te beschermen? Op <a href="https://hulpbijprivacy.nl/">https://hulpbijprivacy.nl/</a> vind je meer informatie.</p>
        </div>

        <div className="navigator">
          <Link to={process.env.PUBLIC_URL + '/'} className="navigator_button button-prev"><i className="fa fa-angle-left" /> Terug naar de startpagina</Link>
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
