export interface IState {
  courseSubmissions?: any,
  username?: string,
}

const initialState: IState = {
  courseSubmissions: {rights_01: 0, rights_02: 1, casefb_01: 1, casefb_02: 0, pii_01: 0, pii_02: 2},
  username: '',
}

export const reducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case 'CREATE_SESSION':
      return {
        ...state,
        username: action.payload.username,
      }
    case 'END_SESSION':
      return initialState
    case 'SET_ANSWER':
      return {
        ...state,
        courseSubmissions: {
          ...state.courseSubmissions,
          [action.payload.id]: action.payload.answer
        },
      }
    default:
      return state
  }
}
