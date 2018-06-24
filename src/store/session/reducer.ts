export interface IState {
  courseSubmissions?: any,
  username?: string,
}

const initialState: IState = {
  courseSubmissions: {casestr_01: 1, rights_01: 2, rights_02: 1, casefb_01: 1, casefb_02: 0, pii_01: 0, pii_02: 2, casetdrgr_01: 1},
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
