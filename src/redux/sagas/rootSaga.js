import {all} from 'redux-saga/effects'

import homeWatchers from './home'

const rootSaga = function* () {
  yield all([
    ...homeWatchers,
  ])
}

export default rootSaga