import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsCaseFacebook as questions } from '../../questions/questions'

import db01 from '../../assets/case-facebook/db-01.jpg'
import db02 from '../../assets/case-facebook/db-02.jpg'
import db03 from '../../assets/case-facebook/db-03.jpg'
import facebook from '../../assets/case-facebook/facebook.jpg'

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
        <h1>Case: Facebook, intieme gegevens van drie miljoen mensen op straat</h1>

        <div className="image">
          <img src={facebook} alt="" />
        </div>

        <p className="intro font-large">Het is vier jaar lang mogelijk geweest, om met makkelijk te vinden inloggegevens, zeer persoonlijke informatie van bijna drie miljoen Facebook gebruikers in te zien.</p>

        <h2>Tests en quizzes op Facebook</h2>
        <p>Via Facebook kun je meedoen aan tal van tests. Dat zijn vaak IQ tests of persoonlijkheids tests. Deze tests zijn niet van Facebook zelf, ze zijn van externe bedrijven die gebruik maken van Facebook als platform om deze testen aan te bieden. Het gaat bij dit lek om de test myPersonality, die van 2007 tot 2012 was in te vullen via Facebook. Deze persoonlijkheidstest werd afgenomen door het Psychometrics Centre van de University of Cambridge.</p>

        <p>Volgens de website van de app betrof het een psychometrische test, een test die psychologische fenomenen meet zoals kennis, vaardigheden, attituden, eigenschappen en persoonskenmerken. Een vergelijkbare test staat nog steeds online.</p>

        <p>In totaal deden meer dan zes miljoen Facebookgebruikers de test, van wie bijna drie miljoen gebruikers toestemming gaven om de informatie anoniem voor onderzoek af te staan. Daarmee werd de data opgeslagen op een externe server. De vraag blijft of deze toestemming bewust is afgegeven door de gebruikers, of dat mensen ondoordacht en uit gewoonte het vinkje hiervoor hebben aangevinkt.</p>

        <h2>De hele wereld had vier jaar lang toegang tot de gegevens</h2>
        <p>Om in deze database te kijken, waren inloggegevens nodig. Voor minimaal vier jaar lang waren deze inloggegevens echter zeer makkelijk te vinden via zoekmachines, waardoor de informatie voor iedereen voor het oprapen lag, schrijft <a href="https://www.newscientist.com/article/2168713-huge-new-facebook-data-leak-exposed-intimate-details-of-3m-users/">New Scientist</a>. Minimaal 280 mensen van ongeveer 150 instanties hebben dit gedaan, onder wie onderzoekers van Facebook, Google, Yahoo en Microsoft.</p>

        <h2>Intieme gegevens gekoppeld aan Facebook accounts</h2>
        <p>De gelekte gegevens waren geanonimiseerd, maar konden met een eenvoudige handeling toch aan het ID van de bijbehorende Facebook account gekoppeld worden. Alle persoonlijke gegevens, waaronder likes, interesses, geslacht, vrienden en check-ins waren gekoppeld aan de informatie die men via de test had gegeven. Een vergelijkbare test staat nog steeds <a href="https://discovermyprofile.com/personality.html">online</a>.</p>

        <p>Vragen die bij zo'n test horen gaan onder andere over wat je van jezelf vindt, of je bijvoorbeeld graag aandacht krijgt, of je je depressief voelt, of wat je politieke voorkeur is. Zo'n lijst is dus ook in te zien door werkgevers of klasgenoten, met alle genante gevolgen van dien.</p>

        <h2>Met je neus op de feiten</h2>
        <p>Zien is geloven. Je kunt lezen dat je data "op straat" ligt, maar net zoals miljoenen andere struisvogels, zal de daadwerkelijke betekenis niet bij je landen tot je het daadwerkelijk ziet. De dataset is nog steeds beschikbaar. Zoals zo vaak gebeurt met gelekte data wordt deze door derden opgeslagen en verder verspreidt.</p>

        <h3>Nog steeds makkelijk toegang tot de dataset</h3>
        <p>Met een beetje pech blijft het voor altijd ergens op internet beschikbaar staan. Na een simpele zoekopdacht is <a href="https://github.com/vanderlowe/myPersonality">deze Github pagina</a> zo gevonden. Iedereen met een beetje programmeerkennis kan met deze tool data ophalen uit de dataset. De uitleg staat erbij. Omdat technische omschrijvingen niet blijven hangen, hieronder screenshots van de data die met deze tool uitgelezen kan worden.</p>

        <div className="image">
          <img src={db01} alt="" />
        </div>

        <p>Zoals je ziet, kunnen deelnemers, adresgegevens en de testresultaten met een eenvoudige aanroep worden opgehaald uit de dataset. Nogmaals, iedere programmeur, zelfs kinderen die op de basisschool les krijgen in programmeren, kunnen deze data dus ophalen.</p>

        <div className="image">
          <img src={db02} alt="" />
        </div>

        <p>Bovenstaande laat zien dat van de deelnemers aan de test, ook bovenstaande data uitgelezen kan worden. Iemands interesses en zelfs relatiestatus wordt in verband gebracht met de resultaten van de test.</p>

        <div className="image">
          <img src={db03} alt="" />
        </div>

        <p>En als kers op de taart, is iemands huidige locatie en adres ook op te vragen.</p>

        <h2>Menselijke fouten</h2>
        <p>Dit lek is ontstaan door een simpele menselijke fout. Facebook is niet eens de hoofdschuldige. Omdat een student de inlog gegevens per ongeluk online heeft gezet, is deze data vier jaar lang beschikbaar geweest. Dit soort menselijke fouten gebeuren dagelijks. Hoe goed een database ook beveiligd wordt, tegen dit soort fouten is weinig te doen. Hou dit altijd in gedachten wanneer je je persoonlijke data deelt.</p>

        <h2>Conclusie</h2>
        <p>Het komt erop neer dat door het invullen van een ogenschijnlijk ongevaarlijke en grappige persoonlijkheidstest, letterlijk alles wat je aan persoonlijke data kunt hebben, publiekelijk op het internet kan belanden. En deze test van Cambridge is niet de enige test. Facebook heeft inmiddels meer dan 200 gelijksoortige applicaties verwijderd.</p>

        <h2>Wat jij hiervan kunt leren, de trade-off</h2>
        <p>Fouten maken is menselijk. En mensen maken veel fouten. Software en apps worden gemaakt door mensen. De systemen die jouw data opslaan worden gemaakt door mensen. Wees jezelf daarvan bewust. Weet dat apps zoals quizzes en apps op Facebook van derden zijn. Van bedrijven die jouw data willen hebben en gebruiken voor eigen doeleinden.</p>

        <p>En bedenk je dan dat ieder antwoord dat jij geeft ergens permanent wordt opgeslagen. Bedenk daarom goed hoe belangrijk en waardevol zo'n app of test is, wanneer je het afweegt tegenover de bescherming van je eigen privacy. Bedenk altijd of deze trade-off het waard is om jouw waardevolle gegevens prijs te geven.</p>


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
          <Link to={process.env.PUBLIC_URL + '/course/risks'} className="navigator_button button-prev"><i className="fa fa-angle-left" /> Jouw gegevens op straat, het risico van identiteitsfraude</Link>
          <Link to={process.env.PUBLIC_URL + '/course/case-tinder-grindr'} className="navigator_button button-next">Case: Tinder en Grindr <i className="fa fa-angle-right" /></Link>
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
