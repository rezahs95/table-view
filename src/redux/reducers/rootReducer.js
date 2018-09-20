import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import auth from './auth'
import translate from './translate'

const reducers = {
  auth,
  translate,
}

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
})

export default rootReducer