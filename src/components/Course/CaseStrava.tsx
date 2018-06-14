import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

interface IStateProps {
  course?: any
  username?: string
}

class CaseStrava extends React.Component<IStateProps> {

  public render() {

    return (
      <Frame>
        <h1>Case Strava</h1>
        <p>Strava, een ideale app om al je sportactiviteiten mee te registreren, maar hoe is het gesteld met de privacy van de gebruiker? Een wielrenner wil niet na een middag fietsen, onaangenaam verrast worden en thuiskomen in een leeg huis.</p>

        <p>Wanneer je de beschikking hebt over een Google- of Facebook-account is het mogelijk om je direct te registreren voor de Strava app, Google en Facebook geef je dan toestemming om data uit te wisselen van al jouw sportactiviteiten die je ooit hebt uitgevoerd. Je kunt je ook registreren met enkel een mailadres.</p>

        <p>In 2014 was al in het nieuws dat dieven gebruik maakten van Strava-data om dure fietsen te stelen: de eigenaar maakte trots foto’s van zijn gloednieuwe fiets en de dieven hoefden alleen maar op het kaartje de woonplaats van de eigenaar op te zoeken.</p>

        <p>Strava is in maart 2018 opnieuw in het nieuws omdat de locaties van geheime militaire bases aan het licht kwamen. Op de heatmap is te zien waar gebruikers vaak hun rondjes lopen en fietsen. En als dat op ‘verlaten’ plekken in een oorlogsgebied is, trekt dat natuurlijk de aandacht. Misschien ben je nu bezorgd of het nog wel een goed idee is om je routes te delen met Strava, ook al is dat een van de pijlers van de community. Het gaat erom dat je je hardlooprondjes en fietsroutes deelt met anderen, zodat je de snelste op een bepaald parcours bent of kunt kijken waar je vrienden tijdens de vakantie hebben gesport.</p>

        <p>Het is niet alleen een militair probleem. Veel mensen vinden het onprettig als wildvreemden kunnen zien waar ze wonen en welke route ze nemen. Vorig jaar bleek al uit de ervaringen van Rosie Spinks dat het vrij lastig is om je Strava-account privacy vriendelijker te maken en af te schermen van vreemden, als je wel gegevens met vrienden wilt delen. Strava bleek verschillende verborgen privacy-instellingen te hebben en via de app was haar locatie toch op bepaalde manieren te achterhalen.</p>

        <h2>Heatmap & Privacy Zone</h2>
        <p>De Strava Heatmap laat zien waar het meest wordt gesport door gebruikers. Dit is een anonieme kaart, dus mensen kunnen niet zien dat jij het bent geweest die zo belachelijk veel rondjes Vondelpark heeft gelopen. Ben je door het hele gebeuren toch wat bezorgd geraakt, dan kun je ook zorgen dat jouw data niet wordt meegenomen in de Strava Heatmap door de privacy instellingen aan te passen.</p>

        <p>Het instellen van een privacy zone kan alleen via de Strava-website. Daar vul je een adres in en geef je aan hoe groot de privacy zone moet zijn. Je kunt kiezen voor 200 meter tot 1 kilometer. In het drukbevolkte Nederland is dat goed genoeg. Strava verbergt de activiteiten binnen die privacy zone, maar dat kan ook betekenen dat er een witte vlek op de kaart ontstaat, precies rondom het gebied waar jij woont.</p>

        <p>Ook deelt Strava foto’s die je onderweg maakt, dus ook daar moet je voor uitkijken. Met een beetje rekenen kan een kwaadwillende toch redelijk goed achterhalen waar jouw huis is. Beter is het om de app niet te gebruiken of om elke rit privé te houden, maar Strava draait juist heel erg om de community, de ranglijsten en het delen van foto’s en ervaringen.</p>

        <div className="questions">
          <h2>Vragen</h2>
          <ul>
            <li>
              <span className="question">Welke stelling is juist?</span>
              <ul>
                <li>De Wet bescherming persoonsgegevens gaat in op 25 mei 2018</li>
                <li>De Wet bescherming persoonsgegevens vervangt de Algemene Verordening Gegevensbescherming</li>
                <li>De Algemene Verordening Gegevensbescherming vervangt de Wet bescherming persoonsgegevens</li>
                <li>De Algemene Verordening Gegevensbescherming geldt alleen binnen Nederland</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navigator">
          <Link to="/course/case-tinder-grindr" className="navigator_button button-prev">Prev</Link>
          <Link to="/course/results" className="navigator_button button-next">Bekijk jouw Privacy Score</Link>
        </div>
      </Frame>
    )
  }
}

function mapStateToProps(state: any, ownProps: any): IStateProps {
  return {
    course: state.course.course,
    username: state.session.username,
  }
}

export default connect(mapStateToProps)(CaseStrava)
