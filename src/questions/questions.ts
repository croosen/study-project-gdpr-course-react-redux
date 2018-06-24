
interface IQuestion {
    id: string,
    question: string,
    answers: any,
    correctAnswer: number,
    submittedAnswer?: number,
    advice?: string
}

export const createQuestion = (id: string, question: string, answers: any, correctAnswer: number, advice: string): IQuestion => ({
  advice,
  answers,
  correctAnswer,
  id,
  question,
})

/*
 * Questions
 * @id: privacy_01, pii_01 etc.
 * @question: string
 * @answers: list
 * @correctAnswer: number (key of answerslist, starting at 0)
 */
export const QuestionsPrivacy = [
  createQuestion(
    "privacy_01",
    "Hoeveel waarde hecht jij aan je online privacy?",
    [
        "Veel, ik ben me ervan bewust dat mijn data beschermt moet worden",
        "Niet zoveel, het maakt mij niet uit of websites mijn naam of adres weten",
        "Geen, ik heb niets te verbergen"
    ],
    0,
    "Maak jezelf meer bewust van de waarde van je privacy. Privacy staat gelijk aan je eigen veiligheid. Denk goed na of jij wilt dat andere mensen, wellicht kwaadwillenden, alles over je te weten komen en die data gebruiken om bijvoorbeeld een lening aan te vragen met jouw naam en adres gegevens. Besef dat dit vaker voorkomt dan je denkt, en als het eenmaal is gebeurd, is het heel moeilijk voor jou om het op te lossen."
  ),
  createQuestion(
    "privacy_02",
    "Als jij op het internet rondsurft van de ene website naar de andere, heb je dan het idee dat jouw privacy in gevaar is?",
    [
      "Nee, volgens mij is mijn privacy gewoon goed beschermd",
      "Niet echt, omdat ik niet zeker weet wat er over mij wordt opgeslagen",
      "Ja, ik heb het idee dat websites soms teveel gegevens van me opslaan"
    ],
    2,
    "Jouw privacy is belangrijk. Wees ervan bewust dat bij iedere website die je bezoekt, gegevens over jou worden opgeslagen. Denk hierbij aan locatiegegevens, geslacht, je surfgedrag, waar en hoe lang je op een website bent geweest... Je moet tegenwoordig bij bijna iedere website cookies accepteren om door te kunnen gaan. Kijk goed wat je accepteert, en installeer eventueel een cookie-blocker in je webbrowser."
  )
]

export const QuestionsPii = [
  createQuestion(
    "pii_01",
    "Je wilt je aanmelden bij een cursus theologie. Op het formulier wordt naar je geloofsovertuiging gevraagd. Vul jij dat in?",
    [
      "Ja, ik neem aan dat dit nodig is voor de cursus",
      "Ik weet het niet, misschien dat ik iets neutraals invul",
      "Nee, want geloofsovertuiging is een bijzonder persoonsgegeven en deze mag niet zomaar verwerkt worden"
    ],
    2,
    "Wordt kritischer wanneer mensen om je gegevens vragen. Is het echt nodig om de cijfers van je postcode te geven wanneer je iets afrekent? Durf te weigeren. Of beter, vraag waar het voor is en weiger daarna alsnog. Vul niet alles zomaar in, maar wees je ervan bewust dat jouw antwoorden ergens worden opgeslagen en verwerkt en bedenkt je dan of jij dat prettig vindt."
  ),
  createQuestion(
    "pii_02",
    "Je wilt inchecken bij je hotel, en bij de balie wordt om een kopie van je paspoort gevraagd. Wat doe jij?",
    [
      "Ik weiger, ze mogen mijn paspoort bekijken, maar geen kopie maken",
      "Ik geef mijn paspoort, anders kan ik mijn kamer niet in",
      "Ik heb zelf altijd kopietjes bij me, met mijn foto en BSN afgeschermd",
      "Ik sta het toe, maar vraag de kopie terug om mijn foto en BSN door te krassen"
    ],
    0,
    "Geef nooit zomaar je paspoort uit handen. Wettelijk gezien is je paspoort eigendom van de staat. Jij bent verantwoordelijk voor de bescherming ervan. Koop bij de ANWB een afschermhoesje, dan zijn de belangrijkste gegevens afgeschermd als iemand toch een kopie wil maken. Is er al een kopie gemaakt? Kras je BSN nummer door en zet duidelijk op de kopie waar deze voor is. Vraag bij het verlaten van het hotel je kopie terug."
  )
]

export const QuestionsCaseFacebook = [
  createQuestion(
    "casefb_01",
    "Je wilt graag iets weten over je eigen persoonlijkheid. Je gaat online op zoek naar een test. Wat is op jou van toepassing?",
    [
      "Ik kijk in de appstore en download een willekeurige test app",
      "Ik Google naar een test en vul de eerste test in die ik tegen kom",
      "Ik zoek naar een aantal testen of apps en vergelijk deze om de beste te vinden",
      "Ik zoek naar een aantal testen of apps, vergelijk deze maar check ook welke bedrijven achter de test zitten en wat zij met mijn data doen",
      "Geen van allen, ik vul geen online testen in"
    ],
    4,
    "IQ en persoonlijkheids tests zijn leuk. Maar vergis je niet, ze zijn niet altijd gemaakt om jou te helpen. De meeste van deze tests zijn om jou nog meer te profileren. Jouw voorkeuren, likes, vrienden en favoriete films zijn al makkelijk van Facebook te plukken. Wanneer andere bedrijven deze data kunnen aanvullen met informatie over jouw persoonlijkheid, hebben zij goud in handen. Vraag jezelf af of jij het prettig vindt dat bedrijven geld verdienen aan jouw meest intieme gegevens."
  ),
  createQuestion(
    "casefb_02",
    "Je krijgt van een vriend(in) een uitnodiging om via een app samen een test in te vullen, zodat je elkaars score kunt vergelijken. Wat doe jij?",
    [
      "Ik sla de uitnodiging af, ik doe daar nooit aan mee",
      "Ik kijk eerst goed welke app het is en wat deze app voor data verzameld",
      "Ik sla de uitnodiging af en raadt mijn vrienden aan om voorzichtig te zijn met de data die ze delen",
      "Ik doe gewoon mee, ik vind het niet zo belangrijk wat er met mijn antwoorden gebeurt",
      "Ik doe gewoon mee"
    ],
    2,
    "Denk altijd goed na wanneer je een uitnodiging van iemand krijgt om een app te gaan gebruiken. In de appstore kun je terug vinden welke data wordt gebruikt. Wees je ervan bewust dat de meeste apps zijn gemaakt om data te verzamelen. Kijk daarna of de app in kwestie data van je wil waar jij je niet fijn bij voelt, zoals misschien je huidige locatie, persoonlijke informatie of persoonlijke voorkeuren."
  )
]

export const QuestionsCaseStrava = [
  createQuestion(
    "casestr_01",
    "Je gebruikt een app voor het hardlopen, en de app vraagt of je je locatie-deling wilt aanzetten. Wat doe jij?",
    [
      "Dat doe ik, anders kan ik niet zien waar ik gelopen heb",
      "Ik doe het wel, maar controleer eerst hoe deze data gebruikt wordt en eventueel kijk ik ook naar een alternatief",
      "Nee, ik registreer mijn hardlooprondje liever niet op een kaart"
    ],
    1,
    "Vergelijk altijd meerdere applicaties. Als je een app wilt om je hardlooprondje vast te leggen, probeer dan een app te vinden die zo min mogelijk met je data doet. Bij Strava heb je bijvoorbeeld ook een web account en wordt standaard alles met je vrienden gedeeld. Denk goed na of jij al die functionaliteiten nodig hebt. Misshien is Google Maps in jouw geval al voldoende om je rondje vast te leggen."
  )
]

export const QuestionsCaseTinderGrindr = [
  createQuestion(
    "casetdrgr_01",
    "Naast Tinder verschijnt er weer een nieuwe dating-app die je via Facebook kunt gebruiken. Tijdens de registratie wordt gevraagd naar je geaardheid. Vul je dit in?",
    [
        "Ik vul zo min mogelijk in. Als het niet verplicht is niet, anders wel",
        "Nee, als het verplicht wordt gesteld, maak ik geen gebruik van deze app",
        "Ja, mijn geaardheid is geen geheim"
    ],
    1,
    "Wanneer je een nieuwe app installeert, worden er vaak allerlei vragen gesteld voordat je kunt beginnen met het gebruik ervan. Vaak is er wel een kleine button te vinden om deze vraag over te slaan. Deze staat doorgaans niet direct in het zicht omdat de appbouwers natuurlijk graag liever jouw antwoorden hebben. Kijk altijd of deze vragen echt nodig zijn om in te vullen. Sla ze over wanneer het kan. En vraagt een app teveel en zijn de vragen ook nog eens verplicht, vraag jezelf dan af of het gebruik van deze app opweegt tegen de persoonlijke informatie die je weggeeft."
  ),
  createQuestion(
    "casetdrgr_02",
    "Je maakt gebruik van een dating app en deze app vraagt je om toegang te geven tot je foto's. Geef je die toestemming?",
    [
      "Ja, ik moet immers mijn foto's kunnen delen met potentiele dates",
      "Nee, ik vind het geen fijn idee dat deze app mijn hele foto album kan bekijken"
    ],
    1,
    "Veel apps vragen toestemming tot je foto's, contacten of agenda. Wanneer je toegang geeft tot je foto's, weer jezelf er dan van bewust dan een app de mogelijkheid heeft om je hele album door te bladeren en analyseren, niet alleen de foto's die jij upload. Foto analyse wordt de laatste tijd veel gebruikt voor gezichtsherkenning en het koppelen van mensen aan elkaar. Wil je toch gebruik maken van deze mogelijkheid, zorg er dan voor dat er zo min mogelijk foto's in je album staan. En zorg ervoor dat meer privacy gevoelige foto's er ook uit zijn."
  )
]

export const QuestionsLaw = [
  createQuestion(
    "law_01",
    "Law vraag 1",
    ["Antwoord 1", "Antwoord 2", "Antwoord 3"],
    2,
    "nnhnghnghn"
  ),
  createQuestion(
    "law_02",
    "Law vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
    0,
    "wwdwwewec"
  )
]

export const QuestionsRights = [
  createQuestion(
    "rights_01",
    "Rights vraag 1",
    ["Antwoord 1", "Antwoord 2", "Antwoord 3"],
    2,
    "jhjhjhjhjh"
  ),
  createQuestion(
    "rights_02",
    "Rights vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
    0,
    "jjdjdjdj"
  )
]

export const allQuestions = QuestionsPrivacy
    .concat(QuestionsPii)
    .concat(QuestionsCaseFacebook)
    .concat(QuestionsCaseStrava)
    .concat(QuestionsCaseTinderGrindr)
    .concat(QuestionsLaw)
    .concat(QuestionsRights)
