import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsCaseTinderGrindr as questions } from '../../questions/questions'

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

class CaseTinderGrindr extends React.Component<IProps> {

  public state: IOwnState = {
    submissions: []
  }

  public render() {
    const { submission } = this.props

    return (
      <Frame>
        <h1>Case: Tinder en Grindr</h1>
        <p>Tinder en Grindr zijn op dit moment wel de meest actuele en meest besproken dating apps. Makkelijk, leuk en verslavend voor velen. Want wat is er nou leuker dan uren door foto’s van andere mensen swipen? Of het vinden van een leuke date?</p>

        <p>Juist dating apps vragen veel van jouw persoonsgegevens en privacy. Je geeft zo’n app toestemming om een connectie te maken met je Facebook account, en deelt daarmee ook direct al je data. Daarnaast vragen de apps om je profiel nog verder aan te vullen.</p>

        <h2>Tinder kent je dromen, angsten en diepste geheimen</h2>
        <p>Judith Duportail schreef in september 2017 een stuk over Tinder. Zij heeft bij Tinder haar data opgevraagd en Tinder kwam terug met 800 pagina’s aan data.</p>

        <p>De lijst bevatte al haar Facebook likes, Instagram foto’s (ook al had zij dat account lang daarvoor verwijderd), gegevens over haar opleiding, leeftijden van mannen waar zij in geïnteresseerd is geweest, en data over wanneer en waar iedere conversatie had plaatsgevonden met iedere match die zij op Tinder had.</p>

        <p>Daarnaast vond zij alles terug wat ze ooit gedeeld had. Op Facebook of op Tinder. Locaties, interesses, banen, foto’s, van welke muziek ze houdt en wat ze graag eet. Zij zegt: “I took a trip into my hopes, fears, sexual preferences and deepest secrets.”</p>

        <p>Tinder houdt zich niet alleen bezig met de data die jij deelt, Tinder analyseert deze data ook. Ieder woord in jouw conversaties wordt geanalyseerd. Tinder weet hoe je je voelt, waar je blij van wordt, wat je seksuele voorkeur is, wat je politieke voorkeur is, en hoe laat jij ‘s avonds gaat slapen.</p>

        <h2>Jouw data is publiek beschikbaar</h2>
        <p>Ook al zegt Tinder dat jouw data “secure” is, jouw data is via verschillende wegen publiek toegankelijk, vaker onbewust dan bewust. Datalekken en andere “foutjes” komen geregeld voor, waardoor al deze data letterlijk “op straat” komt te liggen. Vaak gebeurt dit omdat derden gebruik maken van de zogenoemde API’s die de apps aanbieden. Met een API kan een derde partij data van de app gebruiken om zelf diensten aan te kunnen bieden. Omdat deze derden ook weer “foutjes” kunnen maken, kan het zo makkelijk gebeuren dat gehele delen van de dataset publiekelijk vrij beschikbaar komen.</p>

        <p>Het laatste actuele lek veroorzaakte dat mensen konden inloggen op het Tinder account van iemand anders, simpelweg door in te loggen met een telefoonnummer.</p>

        <h2>Grindr deelde HIV statussen met derden</h2>
        <p>Grindr, de Tinder variant voor homoseksuelen, heeft dankzij zo’n foutje data vrijgegeven waaronder ongelezen berichten, weggegooide foto’s en actuele locatiegegevens van gebruikers van de app. Zonder enige technische kennis was het mogelijk om de exacte locatie van een persoon te achterhalen.</p>

        <p>Nog genanter is dat Grindr gegevens met derden heeft gedeeld, waaronder ook de HIV status van de gebruiker. Deze data is niet-geanonimiseerd en was direct te linken aan de persoon. Daarbij werd de data ook nog eens onversleuteld verzonden, dus was de data ook daarmee publiekelijk toegankelijk.</p>

        <h2>De OKCupid dataset</h2>
        <p>[TODO]
        https://www.reddit.com/r/datasets/comments/4jj53i/here_is_a_mirror_for_the_okcupid_osf_emil/</p>

        <p>https://www.vox.com/2016/5/12/11666116/70000-okcupid-users-data-release</p>

        <p>[TODO] even checken, iemand werd van racisme beschuldigd (white supremacist) door deze set.</p>

        <h2>Gevolgen</h2>
        <p>Het vervelende is, dat wanneer datasets op straat belanden, er altijd mensen zijn die deze sets opslaan en verspreiden via zogeheten mirrors. Dat betekent dat je data nog lange tijd online staat, en misschien wel helemaal nooit meer verdwijnt.</p>

        <p>[TODO] Banken en verzekeraars gebruiken data analyse
        http://www.amweb.nl/branche/nieuws/2016/11/steeds-meer-big-data-analyses-door-verzekeraars-10190913</p>

        <p>Er zijn zelfs mensen die tools maken zodat anderen kunnen checken of zij in zo’n dataset beland zijn. Op https://ryanfb.github.io/okc-leak-checker/ kun je kijken of jouw gegevens te prooi zijn gevallen.</p>

        <p>https://www.iculture.nl/nieuws/tinder-kwetsbaarheid-toegang-telefoonnummer/</p>

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
          <Link to={process.env.PUBLIC_URL + '/course/case-tinder-grindr'} className="navigator_button button-prev">Prev</Link>
          <Link to={process.env.PUBLIC_URL + '/course/case-strava'} className="navigator_button button-next">Next</Link>
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

export default connect(mapStateToProps)(CaseTinderGrindr)
