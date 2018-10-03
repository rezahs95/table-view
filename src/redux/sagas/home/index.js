import {takeEvery, takeLatest} from "redux-saga/effects"

import submit from "./submit"
import types from "../../actions/types"

function* watchSubmit() {
  yield takeLatest(types.BASE.HOME.SUBMIT, submit)
}

export default [
  watchSubmit(),
]