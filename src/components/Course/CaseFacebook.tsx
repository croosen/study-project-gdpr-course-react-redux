import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsCaseFacebook as questions } from '../../questions/questions'

interface IStateProps {
  course?: any
  submission?: any
  username?: string
}

interface IOwnState {
  submissions: any,
}

interface IOwnProps {
  onClick?: () => void,
}

type IProps = IStateProps & IOwnProps & IOwnState

class CaseFacebook extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission } = this.props

    return (
      <Frame>
        <h1>Case: Facebook</h1>
        <p>Facebook privacy in het geding door lekken nieuwe intieme data.
        Stel je eens voor dat al je intieme data zomaar op straat komt te liggen. Meer dan drie miljoen mensen overkomt het, want vier jaar lang konden mensen hun persoonlijke gegeven inzien door een Facebook privacy lek.</p>

        <p>De gebruikers hebben de gegevens zelf aan Facebook gegeven door via een app een persoonlijkheidstest af te nemen. Deze test bestond uit een hoop psychologische vragen waarvan de antwoorden vervolgens konden worden opgeslagen. Ruim de helft van de gebruikers gaf toestemming om de data op te slaan, daarna ging het fout.</p>

        <p>Door het lek zijn de antwoorden, maar ook leeftijd, geslacht, locatie en status-updates naar buiten gekomen. Hoewel het de bedoeling was dat enkel onderzoekers van de universiteit van Cambridge's Psychometrics Centre toegang zouden hebben tot alle data, was het vier jaar mogelijk dat ook anderen toegang hadden doordat het wachtwoord simpelweg online te vinden was. De app werd 7 april 2018 verwijderd, maar het was al te laat.</p>

        <p>Eerder dit jaar wordt duidelijk dat het Britse bedrijf Cambridge Analytica via een speciale app facebook gegevens van 87 miljoen gebruikers over de wereld buit heeft gemaakt. Met deze informatie hebben zij een programma gebouwd dat is ingezet om de Amerikaanse verkiezingen te beïnvloeden. Het bedrijf heeft niet alleen namen en e-mailadressen weten weg te sluizen, maar ook vind-ik-leuk’s, foto’s en vriendschap-lijsten. Zodra dit duidelijk wordt, moet Facebook door het stof. Het bedrijf erkent dat er een fout is gemaakt, maar de excuses zijn niet genoeg. Veel gebruikers verwijderen uit protest hun account.</p>

        <h2>Hoeveel privacy heb je?</h2>
        <p>Bij velen is onduidelijk welke gegevens social media nu eigenlijk van hen bezitten. Maar het is zeker dat kanalen als Facebook veel informatie hebben, zo kunnen websites al gebeurtenissen voorspellen aan de hand van data van social media. Die media lijken meer over jou te weten dan jijzelf.</p>

        <div className="questions">
          <h2>Vragen</h2>
          <ul>
            {questions.map((question, i) => (
              <li key={i}>
                <h3>{question.question}</h3>
                <ul>
                  {question.answers.map((answer: any, k: any) => (
                    // tslint:disable-next-line jsx-no-lambda
                    <li key={k}><button onClick={() => this.handleAnswer(question.id, k)} className={submission[question.id] === k ? 'submitted' : ''}>{answer}</button></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="navigator">
          <Link to={process.env.PUBLIC_URL + '/course/rights'} className="navigator_button button-prev">Prev</Link>
          <Link to={process.env.PUBLIC_URL + '/course/case-tinder-grindr'} className="navigator_button button-next">Next</Link>
        </div>
      </Frame>
    )
  }

  private handleAnswer = (id: string, index: any) => {
    store.dispatch(setAnswer(id, index))
  }
}

function mapStateToProps(state: any, ownProps: any): IStateProps {
  return {
    course: state.course.course,
    submission: state.session.courseSubmissions,
    username: state.session.username,
  }
}

export default connect(mapStateToProps)(CaseFacebook)
