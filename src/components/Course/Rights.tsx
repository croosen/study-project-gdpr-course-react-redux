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
        <p className="font-large">Naast versterking van de bestaande rechten krijg je door de AVG een aantal aanvullende rechten, zoals het recht om in te zien welke persoonsgegevens een organisatie van je heeft. Deze rechten zijn nu uitgebreid met het recht op dataportabiliteit (het recht om je gegevens mee te nemen) en het recht op vergetelheid (het recht dat organisaties je persoonsgegevens moeten wissen als je erom vraagt).</p>

        <h2>Jouw rechten onder de AVG: Algemene Verordening Persoonsgegevens</h2>
        <p>De regels voor toestemming zijn ook verscherpt: als je toestemming moet geven voor het gebruik van jouw gegevens, mag je die bijvoorbeeld meer niet ongemerkt geven. En je moet je toestemming ook weer makkelijk kunnen intrekken.</p>

        <h3>Nieuw: Recht op vergetelheid</h3>
        <p>Je hebt al het recht om een organisatie te vragen hun persoonsgegevens te verwijderen. Straks kun je daarnaast eisen dat de organisatie de verwijdering doorgeeft aan alle andere organisaties die deze gegevens van deze organisatie hebben gekregen.</p>

        <p><a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-vergetelheid">Recht op vergetelheid</a> geldt als: Een organisatie jouw gegevens niet meer nodig heeft, je je toestemming hebt ingetrokken, je bezwaar hebt gemaakt, een organisatie je gegeven onrechtmatig heeft verwerkt, de wettelijke bewaartermijn is verlopen, of wanneer je jonger dan 16 jaar bent en je gegevens zijn verzameld via een app of website.</p>

        <h3>Nieuw: Recht op dataportabiliteit</h3>
        <p>Je hebt (onder bepaalde voorwaarden) het recht om van de organisatie je persoonsgegevens in een standaardformaat te ontvangen. Dit heet het <a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-dataportabiliteit">recht op dataportabiliteit.</a> Dit zorgt ervoor dat jouw data makkelijker van de ene organisatie naar de andere kan worden gestuurd, zoals bijvoorbeeld het overdragen van een servicecontract of medisch dossier.</p>

        <h3>Recht op inzage</h3>
        <p>Dit is het recht om de persoonsgegevens die organisaties van u verwerken in te zien. Je hebt dus <a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-inzage">recht op inzage</a> over wat een organisatie over jou opslaat, hoe zij jouw gegevens gebruikt en aan welke andere organisaties jouw gegevens worden verstrekt.</p>

        <h3>Recht op rectificatie</h3>
        <p><a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-rectificatie">Recht op rectificatie</a> is het recht om de persoonsgegevens die organisaties van je verwerken te laten aanpassen of aanvullen. Je kunt een organisatie vragen je gegevens te rectificeren als deze feitelijk onjuist zijn, onvolledig zijn of op een andere manier in strijd met de wet worden gebruikt.</p>

        <h3>Recht op beperking van de verwerking</h3>
        <p><a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-beperking-van-de-verwerking">Je hebt het recht op beperking van verwerking</a>, dus om organisaties te vragen om het gebruik van je persoonsgegevens te beperken. Dit recht geld wanneer je gegevens niet meer nodig zijn, onjuist zijn, onrechtmatig worden verwerkt of wanneer je bezwaar hebt gemaakt.</p>

        <h3>Recht bij geautomatiseerde besluitvorming en profilering (recht op een menselijke blik)</h3>
        <p>Dit betekent dat je het <a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-op-een-menselijke-blik-bij-besluiten">recht hebt op een menselijke blik</a> bij besluiten die over jou gaan. Sommige organisaties nemen een besluit op basis van automatisch verwerkte gegevens. Dit gebeurt bijvoorbeeld bij profilering. Voorbeelden zijn de automatische weigering van een online ingediende kredietaanvraag of verwerking van sollicitaties via internet zonder menselijke tussenkomst. Je mag een organisatie dus vragen een beoordeling opnieuw uit te laten voeren door een echt persoon. Zeker bij bijvoorbeeld kredietaanvragen kan dit een enorm verschil in uitkomst tot resultaat hebben.</p>

        <h3>Recht op bezwaar</h3>
        <p>Je hebt het recht aan een organisatie te vragen je persoonsgegevens niet meer te gebruiken. Dit heet het <a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/recht-van-bezwaar">recht van bezwaar</a>. Je mag om bijzondere persoonlijke redenen van het recht van bezwaar gebruikmaken. Daarnaast is het recht van bezwaar van toepassing als een organisatie je persoonsgegevens gebruikt voor marketingdoeleinden.</p>

        <h2>Gebruik maken van je rechten</h2>
        <p>Organisaties zijn in de meeste gevallen verplicht om je verzoek over de uitoefening van je rechten binnen 1 maand uit te voeren. En je ook binnen 1 maand te laten weten dat dat is gebeurd. Tenzij zij volgens de AVG niet verplicht zijn om aan je verzoek te voldoen. Maar ook dan moeten zij je dat binnen 1 maand laten weten.</p>

        <p>In uitzonderlijke gevallen mag een organisatie binnen 3 maanden reageren op je verzoek. Bijvoorbeeld wanneer een verzoek heel complex is. Maar ook dan geldt dat zij je wel binnen 1 maand moeten laten weten dat zij meer tijd nodig hebben het verzoek uit te voeren.</p>

        <h2>Voorbeeldbrieven</h2>
        <p>De Autoriteit Persoonsgegevens heeft een aantal voorbeeldbrieven beschikbaar gesteld, waarmee jij gebruik kunt maken van de rechten die jij hebt als het om jouw persoonsgegevens gaat. Heb je dus je persoonsgegevens aan een organisatie gegeven en heb je daar spijt van? Met de AVG kun je daar nu iets aan doen.</p>

        <p><a href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/voorbeeldbrieven">Compleet overzicht voorbeeldbrieven</a></p>

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
          <Link to={process.env.PUBLIC_URL + '/course/risks'} className="navigator_button button-next">Next</Link>
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
