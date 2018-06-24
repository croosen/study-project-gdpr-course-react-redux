import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsRisks as questions } from '../../questions/questions'

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

class Risks extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission } = this.props

    return (
      <Frame>
        <h1>Jouw gegevens op straat, het risico van identiteitsfraude</h1>
        <p className="font-large">Identiteitsfraude komt duizenden keren per jaar voor, zowel op internet als in 'het echte leven'. Sommige criminelen shoppen bij meerdere winkels en laten een andere persoon voor de rekening opdraaien. Ze gebruiken dan zijn of haar gegevens. Criminelen misbruiken het burgerservicenummer, de geboortedatum en het adres.</p>

        <p>Wat de problemen verergert: je hoeft je steeds minder vaak in persoon aan de balie te identificeren, dat gebeurt steeds vaker op afstand. Denk aan online een telefoonabonnement of bankrekening afsluiten met een kopie van je identiteitsbewijs. Daardoor neemt de kans op identiteitsfraude toe. Een oplichter heeft dan alleen nog een kopietje van jouw ID nodig.</p>

        <p>In 2016 kreeg het Centraal Meldpunt Identiteitsfraude en -fouten (CMI) 1700 meldingen, tegenover 800 in 2015.</p>

        <p><i>In sommige gevallen zijn de gevolgen van identiteitsfraude verstrekkend. Als criminelen bijvoorbeeld op jouw naam leningen weten af te sluiten of een pand te huren, kan ineens de deurwaarder of politie voor je deur staan. Het kan dan jaren duren voordat je naam is gezuiverd.</i></p>

        <h2>Jouw gegevens in handen van criminelen</h2>
        <p>Je denkt misschien dat het gebruiken van verschillende sterke wachtwoorden een garantie is voor het voorkomen van identiteitsfraude. Naast datalekken, waarbij jouw gegevens gewoon simpelweg op straat belanden, zijn er voor criminelen ook andere manieren om aan jouw gegevens te komen.</p>

        <h3>Verkoop- en vacaturesites</h3>
        <p>Criminelen gebruiken verkoopsites zoals Marktplaats om jouw identiteit in handen te krijgen. Ze vragen om een kopie van je ID; zogenaamd om zeker te weten met wie ze te maken hebben. Soms sturen zo ook hun 'eigen' ID, om vertrouwen te wekken. Dat is dan een eerder buitgemaakte kopie. Begin 2017 werden 3 criminelen opgepakt die zo 2500 mensen zouden hebben opgelicht.</p>

        <p>Een ander voorbeeld, waar je misschien niet snel aan denkt, zijn nep-vacatures. Criminelen plaatsen nep-vacatures, waarbij ze je vragen om een kopie ID en een kopie van je salarisstrook. Mensen die niet op hun hoede zijn en mensen die een zekere druk hebben om een baan te vinden, sturen deze gegevens op. Een crimineel kan met jouw ID en salarisstrook niet alleen telefoonabonnementen afsluiten, maar ook een auto financieren, of een heel huis.</p>

        <h3>Datalekken</h3>
        <p>Bij een datalek gaat het om toegang tot of vernietiging, wijziging of onbedoeld vrijkomen van persoonsgegevens. Denk aan namen, telefoonnummers, e-mailadressen, maar ook aan strafrechtelijk verleden of levensovertuiging. Een datalek is bijvoorbeeld een kwijtgeraakte usb-stick met persoonsgegevens, een gestolen laptop of een inbraak in een databestand door een hacker.</p>

        <p>De term ‘datalek’ komt niet voor in de wet. De Algemene Verordening Gegevensbescherming (AVG) heeft het in plaats daarvan over een ‘inbreuk in verband met persoonsgegevens’. De AVG definieert dit als volgt:</p>

        <blockquote>...een inbreuk op de beveiliging die per ongeluk of op onrechtmatige wijze leidt tot de vernietiging, het verlies, de wijziging of de ongeoorloofde verstrekking van of de ongeoorloofde toegang tot doorgezonden, opgeslagen of anderszins verwerkte gegevens;</blockquote>

        <h2>Voorbeelden van datalekken waar je niet snel aan denkt</h2>
        Een datalek omvat niet alleen gelekte persoonsgegevens via websites. Ook verkeerd bezorgde post kan een datalek zijn.

        <h3>Verkeerd bezorgde brief</h3>
        <p>Een brief bevat meestal persoonsgegevens; het bevat immers informatie die specifiek bedoeld is voor de ontvanger. Een dergelijke brief kan per ongeluk naar de verkeerde persoon worden gestuurd. Die persoon kan, zonder enige kwaad in de zin te hebben, de brief openen omdat hij denkt dat de inhoud voor hem is bestemd. In dat geval is er sprake van een datalek.</p>

        <h3>Persoonsgegevens bij het oud papier</h3>
        <p>Door onzorgvuldig handelen kunnen documenten bij het oud papier belanden. Wordt oud papier aan de straat gezet, dan zou het zomaar kunnen zijn dat het (onbedoeld) in de verkeerde handen valt.</p>

        <h3>Persoonsgegevens op een (oud) apparaat</h3>
        <p>Bij de aanschaf of verkoop van een apparaat zoals een mobiele telefoon of laptop, kunnen ook persoonsgegevens worden gelekt.</p>

        <h3>Persoonsgegevens delen met verkeerde ontvanger</h3>
        <p>Recent zijn medische gegevens van jongeren naar <a href="https://www.zorgwelzijn.nl/een-verkeerde-email-en-gegevens-liggen-op-straat/">verkeerde ontvangers gemaild</a>. Gelukkig betrof het een <a href="https://www.rtvutrecht.nl/nieuws/1463385/">klein aantal personen</a> die vanwege hun rol als ambtenaar al een zwijgplicht hadden en zijn de gegevens vernietigd, maar dit soort kleine "foutjes" zorgen er wel voor dat gevoelige gegevens makkelijk op straat belanden.</p>

        <h2>Digitale datalekken</h2>
        <p>De meest voorkomende datalekken zijn die waarbij persoonsgegevens op straat belanden door (menselijke) fouten in websites en applicaties. Deze fouten maken het lekken mogelijk of zorgen ervoor dat hackers deze fouten kunnen misbruiken om persoonsgegevens te krijgen.</p>

        <h2>De meest recente en opzienbarende datalekken</h2>

        <h3>Hackers slaan hun slag bij Ashley Madison</h3>
        <p>De vreemdgangers-website Ashley Madison had te maken met een hack en daardoor lagen de persoonlijke gegevens van 594 Nederlanders op straat. In totaal werden er wereldwijd van ruim 37 miljoen mensen informatie gestolen.</p>

        <h3>Intieme privédata miljoenen Facebook-gebruikers toegankelijk via datalek</h3>
        <p>Een database met zeer persoonlijke gegevens van meer dan drie miljoen Facebook-gebruikers was vier jaar lang voor iedereen toegankelijk. De gegevens zijn afkomstig van een persoonlijkheidstest op Facebook, <a href="https://www.engadget.com/2018/05/14/researchers-may-have-exposed-facebook-quiz-data-on-3-million-use/?guccounter=1">aldus New Scientist</a>. Hierbij moesten gebruikers psychologische vragen beantwoorden.</p>

        <h2>Is jouw email adres gelekt?</h2>
        <p><a href="https://haveibeenpwned.com/">HaveIBeenPwned.com</a> is een website om te controleren of je email adres is buitgemaakt door hacks of datalekken. Is dit het geval, pas dan zo snel mogelijk je wachtwoorden aan.</p>

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
          <Link to={process.env.PUBLIC_URL + '/course/rights'} className="navigator_button button-prev"><i className="fa fa-angle-left" /> Jouw rechten</Link>
          <Link to={process.env.PUBLIC_URL + '/course/case-facebook'} className="navigator_button button-next">Case: Facebook, intieme gegevens van drie miljoen mensen op straat <i className="fa fa-angle-right" /></Link>
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

export default connect(mapStateToProps)(Risks)
