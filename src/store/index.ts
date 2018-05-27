import { compose, createStore } from 'redux'
import rootReducer from './rootreducer'

// const store = createStore(rootReducer)

const enhancers = compose(
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f:any) => f
);
export const store = createStore(rootReducer, enhancers);
