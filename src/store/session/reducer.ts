export interface IState {
  username?: string
}

const initialState: IState = {
  username: ''
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
    default:
      return state
  }
}
