import { applyMiddleware, combineReducers, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { reducer as course } from './store/course'

import { reducer as session } from './store/session'

import thunk from 'redux-thunk'

const reducer = combineReducers({
  course,
  session
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunk,
  )),
)

export default store
