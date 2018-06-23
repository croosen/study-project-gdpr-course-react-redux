import * as React from 'react';

import { connect } from 'react-redux';

import { Frame } from '../../Frame'

import { Link } from 'react-router-dom'

import { setAnswer } from '../../store/session'

import { store } from '../../store'

import { QuestionsCaseTinderGrindr as questions } from '../../questions/questions'

import grindr from '../../assets/case-tinder-grindr/grindr.jpg'
import tdr01 from '../../assets/case-tinder-grindr/tdr-01.jpg'
import tinder from '../../assets/case-tinder-grindr/tinder.jpg'

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

        <div className="image">
          <img src={tinder} alt="" />
        </div>

        <p className="intro font-large">Tinder en Grindr zijn op dit moment wel de meest actuele en meest besproken dating apps. Makkelijk, leuk en verslavend voor velen. Want wat is er nou leuker dan uren door foto’s van andere mensen swipen? Of het vinden van een leuke date?</p>

        <p>Juist dating apps vragen veel van jouw persoonsgegevens en privacy. Je geeft zo’n app toestemming om een connectie te maken met je Facebook account, en deelt daarmee ook direct al je data. Daarnaast vragen de apps om je profiel nog verder aan te vullen.</p>

        <h2>Tinder kent je dromen, angsten en diepste geheimen</h2>
        <p>Judith Duportail schreef in september 2017 een stuk over Tinder. Zij heeft bij Tinder <a href="https://www.theguardian.com/technology/2017/sep/26/tinder-personal-data-dating-app-messages-hacked-sold">haar data opgevraagd</a> en Tinder kwam terug met 800 pagina’s aan data.</p>

        <p>De lijst bevatte al haar Facebook likes, Instagram foto’s (ook al had zij dat account lang daarvoor verwijderd), gegevens over haar opleiding, leeftijden van mannen waar zij in geïnteresseerd is geweest, en data over wanneer en waar iedere conversatie had plaatsgevonden met iedere match die zij op Tinder had.</p>

        <p>Daarnaast vond zij alles terug wat ze ooit gedeeld had. Op Facebook of op Tinder. Locaties, interesses, banen, foto’s, van welke muziek ze houdt en wat ze graag eet. Zij zegt: <i>“I took a trip into my hopes, fears, sexual preferences and deepest secrets.”</i></p>

        <p>Tinder houdt zich niet alleen bezig met de data die jij deelt, Tinder analyseert deze data ook. Ieder woord in jouw conversaties wordt geanalyseerd. Tinder weet hoe je je voelt, waar je blij van wordt, wat je seksuele voorkeur is, wat je politieke voorkeur is, en hoe laat jij ‘s avonds gaat slapen.</p>

        <h2>Jouw data is publiek beschikbaar</h2>
        <p>Ook al zegt Tinder dat jouw data “secure” is, jouw data is via verschillende wegen publiek toegankelijk, vaker onbewust dan bewust. Datalekken en andere “foutjes” komen geregeld voor, waardoor al deze data letterlijk “op straat” komt te liggen. Vaak gebeurt dit omdat derden gebruik maken van de zogenoemde API’s die de apps aanbieden. Met een API kan een derde partij data van de app gebruiken om zelf diensten aan te kunnen bieden. Omdat deze derden ook weer “foutjes” kunnen maken, kan het zo makkelijk gebeuren dat gehele delen van de dataset publiekelijk vrij beschikbaar komen.</p>

        <p>Het <a href="https://www.iculture.nl/nieuws/tinder-kwetsbaarheid-toegang-telefoonnummer/">laatste actuele lek</a> veroorzaakte dat mensen konden inloggen op het Tinder account van iemand anders, simpelweg door in te loggen met een telefoonnummer.</p>

        <h2>Inloggen op het Tinder account van iemand anders</h2>

        <div className="image">
          <img src={tdr01} alt="" />
        </div>

        <p>Zoals de meeste software is Tinder niet hackproof. Door een beveiligingslek konden mensen toegang tot je account krijgen. Je had alleen een telefoonnummer nodig om een kijkje te nemen op het account van iemand anders. De kwetsbaarheid is ondertussen opgelost. Dit zegt wel dat wanneer een dergelijk lek mogelijk is, het niet vreemd is voor andere lekken om te onstaan. De meeste lekken ontstaan door menselijke fouten. Apps worden continue doorontwikkeld door programmeurs en bij die ontwikkeling is het niet ongewoon dat er nieuwe kwetsbaarheden ontstaan.</p>

        <p>De beveiligingsonderzoeker Anand Prakash van Appsecure vond het beveiligingslek in de dating-app. In een <a href="https://medium.com/appsecure/hacking-tinder-accounts-using-facebook-accountkit-d5cc813340d1">blogpost op Medium</a> legt hij uit hoe eenvoudig de hack uit te voeren is. Je kan op Tinder immers inloggen met enkel een telefoonnummer. Die wordt dan doorgestuurd naar Facebook’s Account Kit om toegang te verkrijgen. De onderzoeker ontdekte dat je op die manier een geldige access token (sleutel voor toegang) kon krijgen en in kon loggen.</p>

        <p>Het enge bij deze hack is dat er bijna geen know-how bij komt kijken. Iedereen kon de hack uitvoeren in een mum van tijd.</p>

        <h2>Grindr deelde HIV statussen met derden</h2>

        <div className="image">
          <img src={grindr} alt="" />
        </div>

        <p>Grindr, de Tinder variant voor homoseksuelen, heeft dankzij een foutje data vrijgegeven waaronder ongelezen berichten, weggegooide foto’s en actuele locatiegegevens van gebruikers van de app. Zonder enige technische kennis was het mogelijk om de exacte locatie van een persoon te achterhalen.</p>

        <p>Nog genanter is dat Grindr gegevens met derden heeft gedeeld, waaronder ook de HIV status van de gebruiker. Deze data is niet-geanonimiseerd en was direct te linken aan de persoon. Daarbij werd de data ook nog eens onversleuteld verzonden, dus was de data ook daarmee publiekelijk toegankelijk.</p>

        <h2>Data werd gedeeld met externe bedrijven</h2>
        <p>Grindrs beveiligingshoofd Bryce Case zegt tegen Axios dat het bedrijf zal stoppen met het delen van de gevoelige informatie. Het deelde de informatie met twee bedrijven, Localytics en Apptimize, naar eigen zeggen om de prestaties van zijn app te verbeteren en om bepaalde functies onder een klein deel van zijn gebruikers te testen. Gevoelige gegevens zouden altijd met versleuteling worden verzonden en niet worden gedeeld met adverteerders, aldus Case. Die zouden wel toegang hebben tot andere informatie, zoals leeftijd, interesses, locatie en relatiestatus.</p>

        <p>In een eerder bericht op het Grindr-blog zei cto Scott Chen dat het bedrijf geen informatie verkoopt. Hij voegde daaraan toe dat gebruikers er zelf voor kiezen om hun hiv-status via de app te publiceren. Deze informatie zou volgens Chen 'zeer stigmatiserend' kunnen zijn, maar het bedrijf koos voor deze optie 'vanwege de gezondheid en het welzijn van zijn gemeenschap'.</p>

        <p>Het bedrijf zegt tegen BuzzFeed dat het momenteel nog niet kan zeggen of gebruikers de optie krijgen om gegevens met terugwerkende kracht te verwijderen. Dit wordt nog een leuke zaak omdat, zoals we nu weten, volgens de nieuwe Algemene Verordening Gegevensbescherming (AVG) mensen het recht hebben op het aanpassen van de data die over hun wordt opgeslagen.</p>

        <h2>Conclusie</h2>
        <p>Zoals we al geleerd hebben, zijn alle apps kwetsbaar voor datalekken. Zeker wanneer het gaat om erg persoonlijke informatie zoals medische gegevens, is het goed om even stil te staan bij de gevolgen.</p>


        <h2>Wat jij hiervan kunt leren, de trade-off</h2>
        <p>Zoals je in de vorige case kon zien, zijn software en apps nooit helemaal secure. Hoe goed data ook beveiligd wordt, door de meest simpele (menselijke) fouten kunnen er altijd makkelijk datalekken ontstaan. Met die wetenschap kun je je afvragen of het slim is om je HIV-status of iedere andere medische status zomaar te delen. Natuurlijk zijn apps als Tinder leuk, maar als je weet wat Tinder met je data doet, als je weet dat Tinder makkelijk 800 pagina's aan data van jou bewaart en dat analyseert, hoe leuk is die app dan nog? Is die (waarschijnlijke) date het jou waard om de app te blijven gebruiken? Of ga je voortaan liever in de sportclub opzoek naar een leuke date?</p>


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
          <Link to={process.env.PUBLIC_URL + '/course/case-facebook'} className="navigator_button button-prev">Prev</Link>
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
