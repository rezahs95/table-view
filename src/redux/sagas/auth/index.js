import {takeEvery} from "redux-saga/effects"

import signIn from "./signIn"
import types from "../../actions/types"

function* watchSignIn() {
  yield takeEvery(types.BASE.AUTH.SIGN_IN, signIn)
}

export default [
  watchSignIn(),
]