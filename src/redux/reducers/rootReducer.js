import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import translate from './translate'
import other from './other'
import data from './data'

const reducers = {
  translate,
  other,
  data,
}

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
})

export default rootReducer