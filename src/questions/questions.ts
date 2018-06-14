
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
    "Privacy vraag 1",
    ["Antwoord 1", "Antwoord 2", "Antwoord 3"],
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
