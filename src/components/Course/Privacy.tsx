import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsPrivacy as questions } from '../../questions/questions'


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

class Privacy extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { username, submission } = this.props

    return (
      <Frame>
        <h1>{username ? username + ', hoeveel waarde hecht jij aan je privacy?' : 'Hoeveel waarde hecht jij aan je privacy?'} </h1>

        <p className="intro font-large">Als we het over privacy hebben, bedoelen we vaak twee dingen, dat we alleen kunnen zijn met anderen, of dat we er zeker van kunnen zijn dat anderen geen toegang hebben tot onze informatie. Het wel of niet hebben van privacy geeft aan in welke mate mensen de toegang tot hun eigen gegevens kunnen controleren.</p>

        <p>We willen graag onze persoonlijke gegevens en de communicatie via het internet kunnen beschermen, buitenstaanders hoeven niet te weten wat wij met anderen communiceren, zeker als het om vertrouwelijke informatie gaat.</p>

        <h2>Recht op privacy</h2>
        <p>Het recht op privacy is in <a href="https://www.denederlandsegrondwet.nl/id/via0icz1lvv8/artikel_10_privacy">Artikel 10 van de grondwet</a> vastgelegd. De Nederlandse grondwet stelt:</p>

        <blockquote>Ieder heeft, behoudens bij of krachtens de wet te stellen beperkingen, recht op eerbiediging van zijn persoonlijke levenssfeer.</blockquote>

        Jouw recht op privacy is dus bij wet geregeld, behoudens de wet te stellen beperkingen. Er moet dus een gegronde, bij wet geregelde uitzondering van toepassing zijn wil dit recht niet gelden. Deze uitzonderingen hebben meestal te maken met politieonderzoek of fraudebestrijding, iets waarmee jij als het goed is niet snel te maken zult hebben.

        <h2>Definitie van privacy</h2>
        <p>Volgens de <a href="https://www.vandale.nl/gratis-woordenboek/nederlands/betekenis/privacy">definitie van de Van Dale</a> betekent privacy:</p>

        <blockquote>...de mogelijkheid om in eigen omgeving helemaal zichzelf te zijn: iemands privacy schenden zich ongevraagd met zijn privéleven bemoeien.</blockquote>

        <p>Deze definitie van privacy is correct maar verouderd en erg summier. Het houdt daarnaast niet direct verband met informationele privacy of data privacy, een vorm van privacy die op dit moment het meest actueel is. Privacy is sinds 1966 een Burger Recht, aanvaard door de Verenigde Naties en vastgelegd in de <a href="https://www.amnesty.nl/encyclopedie/vn-verdragen-1966-vn-verdrag-bupo-vn-verdrag-ecsocu">Burgerrechten en Politieke Rechten</a> (BuPo).</p>

        <h2>Informationele privacy</h2>
        <p>Deze definitie omvat een vroegere definitie van privacy. Echter door veranderingen in de maatschappij waarin digitale data een steeds grotere rol speelt, is er een nieuwe definitie van privacy bijgekomen, die voor informationele privacy, of data privacy. Informationele privacy is een relatief nieuw begrip. Woordenboek de Van Dale geeft daaropvolgend deze definities:</p>

        <blockquote>Informationele privacy; bescherming van persoonsgegevens, m.n. het recht om niet meer informatie over zichzelf te verstrekken en aan niet meer personen dan strikt noodzakelijk is, en het recht om te weten welke persoonlijke informatie er in omloop is, hoe die verzameld is en wat ermee gedaan wordt.</blockquote>

        <blockquote>Informationele privacy omvat een groot gebied binnen het dagelijkse leven van individuen. Bij elke aankoop, gebruik van een online of offline dienst of communicatie spelen informatie en persoonsgegevens een rol. Veel gegevens hebben als eigenschap dat deze beschermd moeten worden voor correct gebruik en integriteit binnen een systeem of organisatie. Hieronder vallen onder andere bankgegevens, verzekeringsgegevens, computerbestanden, email- of sms berichten en reisgegevens.</blockquote>

        <h2>Jouw privacy en de wet</h2>
        <p>Per 25 mei 2018 geldt er een nieuwe wet voor alle landen binnen de EU: de <a href="https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-europese-privacywetgeving/algemene-informatie-avg">Algemene Verordening Gegevensbescherming</a> (AVG). De AVG is ook wel bekend onder de Engelse naam: General Data Protection Regulation (GDPR). Deze nieuwe wet geeft bedrijven een grotere verantwoordelijkheid om de privacy van personen te beschermen. Verderop bespreken we uitgebreid wat de AVG precies is, en wat die voor jou en jouw privacy betekent.</p>

        <h2>Leermomentje!</h2>
        <p>Op de vorige pagina werd naar je naam gevraagd. {username ? 'Je hebt deze zonder na te denken ingevuld... Het was geen verplichte vraag, je had ook gewoon de cursus kunnen starten zonder je naam in te vullen! Op deze manier worden vaak peroonsgegevens verzameld. Iets om over na te denken!' : 'Jij was slim genoeg om dit niet zomaar in te vullen. Het was dus geen verplichte vraag. Op deze manier worden vaak peroonsgegevens verzameld. Iets om over na te denken!'}</p>

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
          <Link to={process.env.PUBLIC_URL + '/'} className="navigator_button button-prev"><i className="fa fa-angle-left" /> Startpagina</Link>
          <Link to={process.env.PUBLIC_URL + '/course/pii'} className="navigator_button button-next">Jouw persoonsgegevens <i className="fa fa-angle-right" /></Link>
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

export default connect(mapStateToProps)(Privacy)
