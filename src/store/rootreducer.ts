import { combineReducers } from 'redux'
import { reducer as sessionReducer } from './session'
// import { reducer as courseReducer } from './session'

export default combineReducers({
  session: sessionReducer,
})
