import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import translate from './translate'
import other from './other'
import data from './data'
import color from './color'

const reducers = {
  translate,
  other,
  data,
  color,
}

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
})

export default rootReducer