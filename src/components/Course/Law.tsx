import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsLaw as questions } from '../../questions/questions'

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

class Law extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission } = this.props

    return (
      <Frame>
        <h1>Jouw privacy en de nieuwe wetgeving</h1>
        <p className="font-large">Sinds 25 mei 2018 is de Algemene verordening gegevensbescherming (AVG) van toepassing. Dat betekent dat er vanaf die datum dezelfde privacywetgeving geldt in de hele Europese Unie (EU). De Wet bescherming persoonsgegevens (Wbp) geldt niet meer.</p>

        <h2>Wbp, AVG en GDPR</h2>
        <p>De AVG zal de huidige wet bescherming persoonsgegevens (Wbp) gaan vervangen. Er zitten nogal wat verschillen tussen de Wbp en de AVG, waarvan één de boetebepaling is. De nieuwe boetes zijn namelijk veel hoger: maximaal 4 procent van de wereldwijde jaaromzet of maximaal 20 miljoen euro. Deze boetes kunnen in Nederland worden opgelegd door de Autoriteit Persoonsgegevens.</p>

        <p>Door de invoering van de AVG krijgen mensen van wie de persoonsgegevens worden verwerkt meer en verder aangescherpte privacy rechten. Aan het recht op inzage en het recht op correctie en verwijdering wordt bijvoorbeeld meer belang gehecht als voorheen binnen de Wbp. Ook komen er nieuwe rechten bij. De dataportabiliteit vereist bijvoorbeeld dat de gegevens gemakkelijk verkregen moeten kunnen worden in een formaat welke ook eenvoudig aan andere partijen kan worden doorgegeven. Hiermee wordt een vaker toegepaste opgeworpen drempel weggenomen.</p>

        <h2>Belangrijkste wijzigingen voor jou als consument</h2>
        <p>Onder de Algemene verordening gegevensbescherming (AVG) hebben organisaties meer verplichtingen bij het verwerken van persoonsgegevens. De AVG legt namelijk meer nadruk op de verantwoordelijkheid van organisaties om aan te tonen dat zij zich aan de wet houden. Dit heet de verantwoordingsplicht. Organisaties moeten kunnen bewijzen dat zij geldige toestemming hebben gekregen. En het moet het voor mensen net zo makkelijk zijn om hun toestemming in te trekken als om die te geven.</p>

        <p>Hierdoor krijg je meer mogelijkheden om voor jezelf op te komen bij de verwerking van je gegevens. Jouw privacyrechten worden namelijk versterkt en uitgebreid.</p>

        <h3>Meer soorten gegevens zijn persoonsgegevens</h3>
        <p>Meer verschillende soorten gegevens vallen vanaf eind mei onder de norm <a href="https://autoriteitpersoonsgegevens.nl/nl/over-privacy/persoonsgegevens/wat-zijn-persoonsgegevens">persoonsgegevens</a>. Daardoor vallen deze ook onder de beschermingsregels die bedrijven moeten naleven. Voorbeelden zijn IP-adressen (unieke nummers die apparaten krijgen zodra ze verbonden zijn met internet) en cookies. Via een IP-adres kunnen organisaties (bijvoorbeeld Facebook en Google) een schat aan privacygevoelige gegevens vergaren, zoals hoe vaak en wanneer je de site bezoekt.</p>

        <h3>Aantoonbare toestemming</h3>
        <p>Bedrijven mogen persoonsgegevens verwerken met je toestemming, maar ze moeten wel kunnen aantonen dat ze die ook echt gekregen hebben. Simpelweg noteren dat jij toestemming hebt gegeven is dus onvoldoende.</p>

        <h3>Meer gegevens zijn  “bijzondere persoonsgegevens”</h3>
        <p>‘Bijzondere persoonsgegevens’ zijn bijvoorbeeld gegevens die informatie geven over je religie, etnische afkomst, politieke opvatting of gezondheid. Er zullen meer gegevens (zoals DNA en vingerafdrukken) straks in deze categorie vallen. Deze gegevens mogen bedrijven in principe niet gebruiken of verwerken. Vingerafdrukscanners zijn nu al op grote schaal in gebruik, bijvoorbeeld op mobiele apparaten en als toegangssleutel in gebouwen, zoals sportscholen.</p>

        <h3>Vereenvoudigde privacyverklaring</h3>
        <p>Een privacyverklaring moet begrijpelijk zijn. De teksten moeten straks zo eenvoudig mogelijk zijn en geen ruimte laten voor andere uitleg. Ook mogen ze geen woorden bevatten zoals 'zou kunnen' of 'mogelijk'.</p>

        <h3>Recht op vergetelheid</h3>
        <p>Je krijgt als burger nieuwe rechten, bijvoorbeeld om 'vergeten' te worden. Je kunt dan in bepaalde gevallen letterlijk eisen dat organisaties je volledig 'vergeten'. Dit houdt in dat je organisaties kunt verzoeken om je persoonsgegevens te wissen. In de huidige wet is er al een 'recht op verwijdering'. Bijvoorbeeld van gegevens die niet van belang zijn voor het doel waarvoor ze zijn verzameld. Het recht op vergetelheid is nu breder en minder beperkt.</p>

        <h3>Je gegevens opvragen</h3>
        <p>Je hebt straks ook het recht de persoonsgegevens die bedrijven van je hebben op te vragen en te ontvangen. Er bestaat nu al een inzagerecht, maar bedrijven gaan hier soms creatief mee om door bijvoorbeeld alleen inzage te geven op kantoor.</p>

        <h3>Bezwaar tegen profilering</h3>
        <p>Je kunt bezwaar maken tegen ‘profilering’, ofwel dat bedrijven een gedetailleerd profiel van je aanmaken. Deze profielen zijn waardevol voor adverteerders.</p>

        <div className="questions">
          <h2>Inzichtvragen</h2>
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
          <Link to={process.env.PUBLIC_URL + '/course/pii'} className="navigator_button button-prev">Jouw persoonsgegevens</Link>
          <Link to={process.env.PUBLIC_URL + '/course/rights'} className="navigator_button button-next">Jouw rechten</Link>
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

export default connect(mapStateToProps)(Law)
