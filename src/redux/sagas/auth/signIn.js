import api from '../../../helpers/api'
import urls from '../../../consts/urls'
import types from '../../actions/types'
import client from '../../../helpers/client'

import {put, take, fork, call} from "redux-saga/effects"

function* signIn(action) {
  const {payload} = action
  const {username, password, rememberMe} = payload
  try {
    //TODO: need to change to fetch js
    const data = yield fork(api.post, urls.AUTH.SIGN_IN, {username, password})
    yield put({type: types.SUCCESS.AUTH.SIGN_IN, data: {data, rememberMe}})
    const {user, token} = data
    if (!rememberMe) {
      yield client.setTokenSessionStorage(token)
    } else {
      yield client.setTokenLocalStorage(token)
    }
  } catch (error) {
    const {message} = error
    yield put({type: types.ERRORS.AUTH.SIGN_IN, message})
  }
}

export default signIn