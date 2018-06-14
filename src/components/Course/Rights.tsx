import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsRights as questions } from '../../questions/questions'

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

class Rights extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission } = this.props

    return (
      <Frame>
        <h1>Jouw rechten</h1>
        <p>Naast versterking van de bestaande rechten krijgen mensen door de AVG een aantal aanvullende rechten.</p>

        <h2>Nieuw: Recht op vergetelheid</h2>
        <p>Mensen hebben al het recht om een organisatie te vragen hun persoonsgegevens te verwijderen. Straks kunnen zij daarnaast eisen dat de organisatie de verwijdering doorgeeft aan alle andere organisaties die deze gegevens van deze organisatie hebben gekregen.</p>

        <h2>Nieuw: Recht op dataportabiliteit</h2>
        <p>Ook hebben mensen straks (onder bepaalde voorwaarden) het recht om van de organisatie hun persoonsgegevens in een standaardformaat te ontvangen. Dit heet het recht op dataportabiliteit.</p>

        <h2>Recht op inzage</h2>
        <p>Dit is het recht om de persoonsgegevens die organisaties van u verwerken in te zien.</p>

        <h2>Recht op rectificatie</h2>
        <p>Dit is het recht om de persoonsgegevens die organisaties van u verwerken te laten aanpassen of aanvullen.</p>

        <h2>Recht op beperking van de verwerking</h2>
        <p>U heeft het recht om organisaties te vragen om het gebruik van uw persoonsgegevens te beperken.</p>

        <h2>Recht bij geautomatiseerde besluitvorming en profilering</h2>
        <p>Dit betekent dat u het recht heeft op een menselijke blik bij besluiten die over u gaan.</p>

        <h2>Recht op bezwaar</h2>
        <p>U heeft het recht om bezwaar te maken tegen de gegevensverwerking. Bijvoorbeeld bij direct marketing.</p>

        <h2>Gebruik maken van je rechten</h2>
        <p>Organisaties zijn in de meeste gevallen verplicht om uw verzoek over de uitoefening van uw rechten binnen 1 maand uit te voeren. En u ook binnen 1 maand te laten weten dat dat is gebeurd. Tenzij zij volgens de AVG niet verplicht zijn om aan uw verzoek te voldoen. Maar ook dan moeten zij u dat binnen 1 maand laten weten.</p>

        <p>In uitzonderlijke gevallen mag een organisatie binnen 3 maanden reageren op uw verzoek. Bijvoorbeeld wanneer een verzoek heel complex is. Maar ook dan geldt dat zij u wel binnen 1 maand moeten laten weten dat zij meer tijd nodig hebben het verzoek uit te voeren.</p>

        <p>[TODO] Hoe kun je gebruik maken van je rechten</p>

        https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-nieuwe-europese-privacywetgeving/controle-over-je-data#welke-privacyrechten-heeft-u-onder-de-avg-6299

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
          <Link to={process.env.PUBLIC_URL + '/course/law'} className="navigator_button button-prev">Prev</Link>
          <Link to={process.env.PUBLIC_URL + '/course/case-facebook'} className="navigator_button button-next">Next</Link>
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

export default connect(mapStateToProps)(Rights)
