import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsPii as questions } from '../../questions/questions'


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

class Pii extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission, username } = this.props

    return (
      <Frame>
        <h1>Jouw persoonsgegevens</h1>

        <p className="font-large">De Algemene Verordening Gegevensbescherming (AVG), voorheen De Wet bescherming persoonsgegevens (Wbp), geeft aan dat een persoonsgegeven elk gegeven is over een geïdentificeerde of identificeerbare natuurlijke persoon. Dit betekent dat informatie ofwel direct over iemand gaat, ofwel naar deze persoon te herleiden is. Dat het om een natuurlijke persoon moet gaan, houdt in dat gegevens van overleden personen of van organisaties geen persoonsgegevens zijn.
        {username ? ' Jouw voornaam is dus ook een persoonsgegeven, ' + username + '!' : ' Je voornaam is dus ook een persoonsgegeven.'}</p>

        <h2>Persoonsgegevens en bijzondere persoonsgegevens</h2>
        <p>Het begrip 'persoonsgegevens' wordt in de Wbp in artikel 2, onder a, omschreven als 'alle informatie betreffende een geïdentificeerde of <a href="https://autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/wbp-naslag/hoofdstuk-1-algemene-bepalingen-art-1-tm-5/artikel-1-sub-wbp">identificeerbare natuurlijke persoon</a>. Deze omschrijving sluit aan bij die van het begrip 'personal data' in het Dataprotectieverdrag waar wordt gesproken van <a href="http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:31995L0046">'any information relating to an identified or identifiable individual.</a></p>

        <p><a href="https://autoriteitpersoonsgegevens.nl/nl/over-privacy/persoonsgegevens/wat-zijn-persoonsgegeven">Er zijn vele soorten persoonsgegevens</a>. Voor de hand liggende gegevens zijn iemands naam, adres en woonplaats. Maar ook telefoonnummers en postcodes met huisnummers zijn persoonsgegevens. Gevoelige gegevens als iemands ras, godsdienst of gezondheid worden ook wel bijzondere persoonsgegevens genoemd. Deze zijn door de wetgever extra beschermd.</p>

        <h2>Definitie van persoonsgegevens</h2>
        <p>De definitie van een persoonsgegeven omvat niet alleen de informatie omtrent een bepaalde persoon in geschreven tekst, maar ook informatie in beeld en geluid.</p>

        <p>De definitie bevat een aantal elementen die expliciet aandacht vragen. Allereerst moet het gaan om informatie 'betreffende' een natuurlijke persoon ('any information relating to').</p>

        <p>Ook moet deze persoon zijn geïdentificeerd of althans identificeerbaar zijn ('identified or identifiable'). Als er aan één van beide elementen niet is voldaan, dan is er geen sprake van persoonsgegevens en is de wet niet van toepassing.</p>

        <p>De Algemene Verordening Gegevensbescherming (AVG) geeft aan dat:</p>

        <blockquote>Een persoonsgegeven is alle informatie over een geïdentificeerde of <a href="https://autoriteitpersoonsgegevens.nl/nl/over-privacy/persoonsgegevens/wat-zijn-persoonsgegeven">identificeerbare natuurlijke persoon</a>.</blockquote>

        <p>De uitgebreidere definitie is te vinden in artikel 4 van de AVG:</p>

        <blockquote>...alle informatie over een geïdentificeerde of identificeerbare natuurlijke persoon ("de betrokkene"); als identificeerbaar wordt beschouwd een natuurlijke persoon die direct of indirect kan worden geïdentificeerd, met name aan de hand van een identificator zoals een naam, een identificatienummer, locatiegegevens, een online identificator of van een of meer elementen die kenmerkend zijn voor de fysieke, fysiologische, genetische, psychische, economische, culturele of sociale identiteit van die natuurlijke persoon;</blockquote>

        <p>Dit betekent dat informatie ofwel direct over iemand gaat, ofwel naar deze persoon te herleiden is. Gegevens van overleden personen of van organisaties zijn geen persoonsgegevens volgens de AVG.</p>

        <h2>Personally Identifiable Information (PII)</h2>
        <p>Personally Identifiable Information (PII) is een term voor persoonlijke data die over het algemeen in Noord Amerika wordt gebruikt. PII refereert aan een relatief smalle range aan persoonlijke data zoals naam, adres, geboortedatum, burgerservicenummer en financiële gegevens zoals creditcardnummers en bankrekeningnummers.</p>

        <h2>Definitie PII</h2>
        <p>De United States Department of Labor stelt de volgende definitie voor PII:</p>

        <blockquote>Elke vertegenwoordiging van informatie die het mogelijk maakt de identiteit van een persoon op wie de informatie betrekking heeft, redelijkerwijs te kunnen afleiden op <a href="https://www.dol.gov/general/ppii">directe of indirecte wijze</a>.</blockquote>

        <h2>Verschil PII en Persoonsgegevens</h2>
        <p>Persoonlijke data, in tegenstelling tot PII en bedoeld in de context van de nieuwe privacywet (AVG/GDPR), omvat een veel bredere range aan persoonlijke informatie, waaronder social media berichten, foto’s, voorkeuren voor levensstijl en zelfs IP adressen.</p>

        <p>De definitie van PII is dus niet geheel hetzelfde als de definitie van persoonsgegevens volgens de AVG. In andere woorden, <a href="https://www.linkedin.com/pulse/gdprthe-difference-between-personally-identifiable-jim-seaman">PII is persoonlijke data, maar niet alle persoonlijke data is PII</a>.</p>

        <h2>De verwerking van jouw gegevens door bedrijven en organisaties</h2>
        <p>Bedrijven en organisaties mogen niet zomaar jouw persoonsgegevens verwerken. Daarvoor moet, volgens Artikel 6 van de AVG, een <a href="http://www.privacy-regulation.eu/nl/artikel-6-rechtmatigheid-van-de-verwerking-EU-AVG.htm">wettelijke grondslag</a> zijn. Het verwerken van bijzondere persoonsgegevens is verboden, tenzij een bedrijf of organisatie zich kan beroepen op een specifieke wettelijke uitzondering én op één  van de zes grondslagen voor het verwerken van ‘gewone’ persoonsgegevens. Dit zijn echter uitzonderlijke gevallen. De zes grondslagen zijn:</p>

        <h3>Toestemming van betrokkene</h3>
        <p>De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer specifieke doeleinden;</p>

        <p><i>Jij moet dus expliciet toestemming geven voor het gebruik van jouw gegevens. Dit gebeurt vaak online door het aanvinken van vakjes waarin je toestemt met de verwerking van je persoonsgegevens, zoals bij het aanmelden van een nieuwsbrief.</i></p>

        <h3>Noodzakelijk voor uitvoering overeenkomst</h3>
        <p>De verwerking is noodzakelijk voor de uitvoering van een overeenkomst waarbij de betrokkene partij is, of om op verzoek van de betrokkene vóór de sluiting van een overeenkomst maatregelen te nemen;</p>

        <p><i>Dit zijn bijvoorbeeld gegevens die een bedrijf nodig heeft als je een telefoonabonnement afsluit. De telefoonmaatschappij moet jou bijvoorbeeld een factuur kunnen sturen.</i></p>

        <h3>Noodzakelijk door wettelijke verplichting</h3>
        <p>De verwerking is noodzakelijk om te voldoen aan een wettelijke verplichting die op de verwerkingsverantwoordelijke rust;</p>

        <p><i>Zoals het geven van een kopietje van je identiteitsbewijs aan je werkgever, zodat deze je bij de Belastingdienst kan aanmelden. De werkgever heeft een wettelijke verplichting om dit te doen.</i></p>

        <p><i>Sommige bedrijven vragen bij indiensttreding een kopie bankpas. Dit is niet wettelijk verplicht en alleen voor het gemak van de werkgever. Het is dus aan jou om te bepalen hoe je hiermee omgaat. Je kunt bijvoorbeeld ook een verklaring tekenen dat het door jou opgegeven rekeningnummer ook echt op jouw naam staat.</i></p>

        <h3>Noodzaak door vitale belangen</h3>
        <p>De verwerking is noodzakelijk om de vitale belangen van de betrokkene of van een andere natuurlijke persoon te beschermen;</p>

        <p><i>Een vitaal belang is aan de orde als het over een belang gaat dat essentieel is voor iemands leven of gezondheid en die persoon niet in staat is om toestemming te verlenen. Een ambulancemedewerker mag zonder jouw toestemming je gegevens gebruiken om bijvoorbeeld je bloedgroep te achterhalen, op het moment dat jij niet in staat bent dat te vertellen.</i></p>

        <h2>Noodzakelijk door algemeen belang</h2>
        <p>De verwerking is noodzakelijk voor de vervulling van een taak van algemeen belang of van een taak in het kader van de uitoefening van het openbaar gezag dat aan de verwerkingsverantwoordelijke is opgedragen;</p>

        <p><i>Dit recht wordt met name door de overheid gebruikt. Een voorbeeld is een gemeente die camera’s ophangt op een bepaalde plek om toezicht te houden met betrekking tot openbare veiligheid.</i></p>

        <h3>Noodzakelijk door gerechtvaardigde belangen</h3>
        <p>De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van de verwerkingsverantwoordelijke of van een derde, behalve wanneer de belangen of de grondrechten en de fundamentele vrijheden van de betrokkene die tot bescherming van persoonsgegevens nopen, zwaarder wegen dan die belangen, met name wanneer de betrokkene een kind is.</p>

        <p><i>Dit belang moet rechtmatig, voldoende duidelijk verwoord en ook echt aanwezig zijn. Dat is zo wanneer een verwerking aantoonbaar noodzakelijk is om bijvoorbeeld bedrijfsactiviteiten te verrichten, zoals het voeren van een personeelsadministratie. Een bedrijf of organisatie mag dus niet zomaar “vinden” dat er reden is voor deze grondslag.</i></p>

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
          <Link to={process.env.PUBLIC_URL + '/course/privacy'} className="navigator_button button-prev">Prev</Link>
          <Link to={process.env.PUBLIC_URL + '/course/law'} className="navigator_button button-next">Next</Link>
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

export default connect(mapStateToProps)(Pii)
