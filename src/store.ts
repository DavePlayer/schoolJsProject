import { createStore } from 'redux'
import { rootReducer } from './components/reducers/combined';

export const store = createStore(rootReducer)