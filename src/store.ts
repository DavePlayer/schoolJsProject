import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './components/reducers/combined';

const enchancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, enchancer(applyMiddleware()))