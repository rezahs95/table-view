import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import auth from './auth'
import translate from './translate'
import other from './other'

const reducers = {
  auth,
  translate,
  other,
}

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
})

export default rootReducer