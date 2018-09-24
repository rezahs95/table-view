import {takeEvery} from "redux-saga/effects"

import submit from "./submit"
import types from "../../actions/types"

function* watchSubmit() {
  yield takeEvery(types.BASE.HOME.SUBMIT, submit)
}

export default [
  watchSubmit(),
]