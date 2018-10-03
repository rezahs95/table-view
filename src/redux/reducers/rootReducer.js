import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import translate from './translate'
import other from './other'
import data from './data'
import color from './color'
import pagination from './pagination'

const reducers = {
  translate,
  other,
  data,
  color,
  pagination,
}

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
})

export default rootReducer