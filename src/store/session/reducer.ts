export interface IState {
  username?: string
}

const initialState: IState = {
  username: undefined
}

export const reducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE_SESSION':
      return {
        ...state,
        username: action.payload.username
      }
    case 'END_SESSION':
      return initialState
    default:
      return state
  }
}
