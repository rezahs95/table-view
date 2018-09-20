import {all} from 'redux-saga/effects'

import authWatchers from './auth'

const rootSaga = function* () {
  yield all([
    ...authWatchers,
  ])
}

export default rootSaga