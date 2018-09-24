import {all} from 'redux-saga/effects'

import authWatchers from './auth'
import homeWatchers from './home'

const rootSaga = function* () {
  yield all([
    ...authWatchers,
    ...homeWatchers,
  ])
}

export default rootSaga