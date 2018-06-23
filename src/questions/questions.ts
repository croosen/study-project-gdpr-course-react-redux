
interface IQuestion {
    id: string,
    question: string,
    answers: any,
    correctAnswer: number,
    submittedAnswer?: number
}

export const createQuestion = (id: string, question: string, answers: any, correctAnswer : number): IQuestion => ({
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
    0
  ),
  createQuestion(
    "privacy_02",
    "Als jij op het internet rondsurft van de ene website naar de andere, heb je dan het idee dat jouw privacy in gevaar is?",
    [
      "Nee, volgens mij is mijn privacy gewoon goed beschermd",
      "Niet echt, omdat ik niet zeker weet wat er over mij wordt opgeslagen",
      "Ja, ik heb het idee dat websites soms teveel gegevens van me opslaan"
    ],
    2
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
    2
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
    0
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
    4
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
    2
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
    1
  ),
  createQuestion(
    "casest_02",
    "Strava vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
    0
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
    1
  ),
  createQuestion(
    "casetdrgr_02",
    "Je maakt gebruik van een dating app en deze app vraagt je om toegang te geven tot je foto's. Geef je die toestemming?",
    [
      "Ja, ik moet immers mijn foto's kunnen delen met potentiele dates",
      "Nee, ik vind het geen fijn idee dat deze app mijn hele foto album kan bekijken"
    ],
    1
  )
]

export const QuestionsLaw = [
  createQuestion(
    "law_01",
    "Law vraag 1",
    ["Antwoord 1", "Antwoord 2", "Antwoord 3"],
    2
  ),
  createQuestion(
    "law_02",
    "Law vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
    0
  )
]

export const QuestionsRights = [
  createQuestion(
    "rights_01",
    "Rights vraag 1",
    ["Antwoord 1", "Antwoord 2", "Antwoord 3"],
    2
  ),
  createQuestion(
    "rights_02",
    "Rights vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
    0
  )
]

export const allQuestions = QuestionsPrivacy
    .concat(QuestionsPii)
    .concat(QuestionsCaseFacebook)
    .concat(QuestionsCaseStrava)
    .concat(QuestionsCaseTinderGrindr)
    .concat(QuestionsLaw)
    .concat(QuestionsRights)
