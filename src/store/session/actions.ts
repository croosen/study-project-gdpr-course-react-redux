export const CREATE_SESSION = 'CREATE_SESSION'
export const END_SESSION = 'END_SESSION'

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
