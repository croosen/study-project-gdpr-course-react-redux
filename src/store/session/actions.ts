export const CREATE_SESSION = 'CREATE_SESSION'
export const END_SESSION = 'END_SESSION'
export const SET_ANSWER = 'SET_ANSWER'

export function createSession(username: string) {
  return {
    payload: {
      username,
    },
    type: 'CREATE_SESSION'
  }
}

export function endSession() {
  return {
    type: 'END_SESSION'
  }
}

export function setAnswer(id: string, answer: number) {
  return {
    payload: {
      answer,
      id,
    },
    type: 'SET_ANSWER'
  }
}
