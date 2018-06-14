import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

interface IStateProps {
  course?: any
  username?: string
}

class CaseFacebook extends React.Component<IStateProps> {

  public render() {

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
          <Link to="/course/rights" className="navigator_button button-prev">Prev</Link>
          <Link to="/course/case-tinder-grindr" className="navigator_button button-next">Next</Link>
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

export default connect(mapStateToProps)(CaseFacebook)
