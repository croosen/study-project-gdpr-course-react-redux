export interface IState {
  courseSubmissions?: any,
  username?: string,
}

const initialState: IState = {
  courseSubmissions: {},
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
