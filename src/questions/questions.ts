
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
    "Heb jij het idee dat jouw privacy tijdens het surfen goed beschermd is?",
    ["Ja", "Hoe kan ik zien of dat zo is?", "Nee, ik heb er geen vertrouwen in"],
    0
  ),
  createQuestion(
    "privacy_02",
    "Privacy vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
    1
  )
]

export const QuestionsPii = [
  createQuestion(
    "pii_01",
    "Pii vraag 1",
    ["Antwoord 1", "Antwoord 2", "Antwoord 3"],
    2
  ),
  createQuestion(
    "pii_02",
    "Pii vraag 2",
    ["Antwoord 1a", "Antwoord 1b"],
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
