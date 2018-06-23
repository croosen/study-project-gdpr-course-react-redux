import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsCaseStrava as questions } from '../../questions/questions'

import base from '../../assets/case-strava/base.jpg'
import strava from '../../assets/case-strava/strava.jpg'

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

class CaseStrava extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission } = this.props

    return (
      <Frame>
        <h1>Case: Strava bracht geheime militaire basis aan het licht</h1>

        <div className="image">
          <img src={strava} alt="" />
        </div>

        <p className="font-large">Strava, een ideale app om al je sportactiviteiten mee te registreren, maar hoe is het gesteld met de privacy van de gebruiker? Een wielrenner wil niet na een middag fietsen, onaangenaam verrast worden en thuiskomen in een leeg huis.</p>

        <h2>Sociale sport app</h2>
        <p>Strava is een website en mobiele applicatie waarmee sportprestaties kunnen worden bijgehouden via GPS. Via de software kunnen gebruikers sportieve prestaties plannen, opslaan en met andere gebruikers vergelijken. Op de website kunnen routes worden gecreëerd. Hiermee kan onder andere het hoogteprofiel van een route worden bepaald. De routes kunnen met de app worden gebruikt als hulpmiddel tijdens het sporten.</p>

        <p>Strava heeft aspecten van een (sportieve) sociale media-applicatie, omdat gebruikers andere gebruikers kunnen volgen, online clubs kunnen aanmaken, foto's kunnen delen, uitdagingen kunnen aangaan en berichten kunnen sturen. Strava is met name populair voor gebruik bij wielrennen en hardlopen, maar kan ook bij een reeks andere sporten worden ingezet, waaronder zwemmen, schaatsen, surfen, skiën en snowboarden.</p>

        <h2>Jouw lokatie (en je dure fiets) makkelijk te vinden voor kwaadwillenden</h2>
        <p>Wanneer je de beschikking hebt over een Google- of Facebook-account is het mogelijk om je direct te registreren voor de Strava app, Google en Facebook geef je dan toestemming om data uit te wisselen van al jouw sportactiviteiten die je ooit hebt uitgevoerd. Je kunt je ook registreren met enkel een mailadres.</p>

        <p>In 2014 was al in het nieuws dat dieven gebruik maakten van Strava-data om dure fietsen te stelen: de eigenaar maakte trots foto’s van zijn gloednieuwe fiets en de dieven hoefden alleen maar op het kaartje de woonplaats van de eigenaar op te zoeken.</p>

        <h2>Geheime militaire bases aan het licht gebracht</h2>

        <div className="image">
          <img src={base} alt="" />
        </div>

        <p>Strava is in maart 2018 opnieuw in het nieuws omdat de locaties van geheime militaire bases aan het licht kwamen. Op de heatmap is te zien waar gebruikers vaak hun rondjes lopen en fietsen. En als dat op ‘verlaten’ plekken in een oorlogsgebied is, trekt dat natuurlijk de aandacht. Misschien ben je nu bezorgd of het nog wel een goed idee is om je routes te delen met Strava, ook al is dat een van de pijlers van de community. Het gaat erom dat je je hardlooprondjes en fietsroutes deelt met anderen, zodat je de snelste op een bepaald parcours bent of kunt kijken waar je vrienden tijdens de vakantie hebben gesport.</p>

        <h2>Identiteit van specifieke personen te achterhalen</h2>
        <p>Volgens de Britse krant The Guardian is het echter nog erger gesteld. Uit alle anonieme data kan immers ook de identiteit van specifieke personen worden ontwaard, zo blijkt. Dat kan als de personen in kwestie de standaard privcay-instellingen van Strava gebruiken. Via de website kan doorgeklikt worden om profielen en best-tijden van specifieke routes te vinden. Op routes waar weinig volk passeert - militaire basissen in Djibouti of ambassades in Noord-Korea bijvoorbeeld - is het zo makkelijk om informatie over individuen te ontwaren.</p>

        <p>Het is niet alleen een militair probleem. Veel mensen vinden het onprettig als wildvreemden kunnen zien waar ze wonen en welke route ze nemen. In augustus 2017 bleek al uit de ervaringen van Rosie Spinks dat het vrij lastig is om je Strava-account privacy vriendelijker te maken en af te schermen van vreemden, als je wel gegevens met vrienden wilt delen. Strava bleek verschillende verborgen privacy-instellingen te hebben en via de app was haar locatie toch op bepaalde manieren te achterhalen.</p>

        <h2>Trade-Offs</h2>
        <p>Strava wordt veel gebruikt in de sportwereld. Mensen delen hardlooprondjes en prestaties met hun hardloopclubje, delen gereden fietsroutes met de wielrenclub of delen trots hun grootste prestaties via Strava op Facebook. Strava is sociaal. Het is bedoeld om je (sport)vrienden op de hoogte te houden van je prestaties. Natuurlijk is het ook een "show off", je laat zien hoe sportief je bent, altijd leuk voor een sportieve date via Tinder of die sollicitatie waarbij gevraagd wordt naar sportieve collega's.</p>

        <p>De "trade-off" is dat je behoorlijk veel van jezelf moet delen. En dat aan dit delen risico's zitten. Zoals eerder genoemd gebruiken kwaadwillenden de data om bijvoorbeeld je nieuwe fiets te stelen, te bepalen wanneer je wel en niet thuis bent, waar je woont, waar je vaak hardloopt en om welke tijden. Dit kan verstrekkende gevolgen hebben voor je eigen veiligheid. Je zult dus altijd moeten nadenken; hoe belangrijk is het gebruik van deze app in relatie tot mijn eigen privacy en veiligheid?</p>

        <h2>Je privacy beschermen: Stel je privacy settings goed in</h2>
        <p>De Strava Heatmap laat zien waar het meest wordt gesport door gebruikers. Dit is een anonieme kaart, dus mensen kunnen niet zien dat jij het bent geweest die zo belachelijk veel rondjes Vondelpark heeft gelopen. Ben je door het hele gebeuren toch wat bezorgd geraakt, dan kun je ook zorgen dat jouw data niet wordt meegenomen in de Strava Heatmap door de privacy instellingen aan te passen.</p>

        <h3>Stel je pricacy zone in</h3>
        <p>Het instellen van een privacy zone kan alleen via de Strava-website. Daar vul je een adres in en geef je aan hoe groot de privacy zone moet zijn. Je kunt kiezen voor 200 meter tot 1 kilometer. In het drukbevolkte Nederland is dat goed genoeg. Strava verbergt de activiteiten binnen die privacy zone, maar dat kan ook betekenen dat er een witte vlek op de kaart ontstaat, precies rondom het gebied waar jij woont.</p>

        <h3>Kijk uit met foto's plaatsen</h3>
        <p>Ook deelt Strava foto’s die je onderweg maakt, dus ook daar moet je voor uitkijken. Met een beetje rekenen kan een kwaadwillende toch redelijk goed achterhalen waar jouw huis is. Beter is het om de app niet te gebruiken of om elke rit privé te houden, maar Strava draait juist heel erg om de community, de ranglijsten en het delen van foto’s en ervaringen.</p>

        <h3>Standaard uitgeschakeld</h3>
        <p>Standaard staan alle privacy-instellingen in de Strava-app uitgeschakeld. Gebruikers moeten bijvoorbeeld bewust kiezen om het anoniem delen van data met heatmaps uit te schakelen, zodat hun routes niet meer openbaar zichtbaar zijn.</p>

        <p>De privacy settings van Strava zijn niet de eenvoudigste om in te stellen. Je hebt de standaard en de "enhanced" settings. Kijk er even goed naar en volg het advies op de <a href="https://support.strava.com/hc/en-us/articles/216918777-Privacy-Settings">website van Strava Support</a>.</p>

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
          <Link to={process.env.PUBLIC_URL + '/course/case-tinder-grindr'} className="navigator_button button-prev">Prev</Link>
          <Link to={process.env.PUBLIC_URL + '/course/results'} className="navigator_button button-next">Bekijk jouw Privacy Score</Link>
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

export default connect(mapStateToProps)(CaseStrava)
