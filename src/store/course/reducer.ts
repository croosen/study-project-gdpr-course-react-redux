import { GET_COURSE } from './actions'
import { GET_COURSE_SUCCESS } from './actions'

const initialState = {
  course: []
}

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_COURSE:
      return {
        ...state,
      }
      // return Object.assign([], state, action.course)
    case GET_COURSE_SUCCESS:
      return Object.assign({}, state, {
        course: action.course,
      })
    default:
      return state
  }
}
