import {apply, select} from 'redux-saga/effects'

import {REST_URL} from 'src/consts/urls'

function* del(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, delRest, [url, data, param, token])
}

function* get(url, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, getRest, [url, param, token])
}

function* patch(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, patchRest, [url, data, param, token])
}

function* post(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, postRest, [url, data, param, token])
}

function* put(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, putRest, [url, data, param, token])
}
//TODO: fill this with fetch js function
const delRest = (url, data, param = '', token) => {
}

const getRest = (url, param = '', token) => {
}

const patchRest = (url, data, param = '', token) => {
}

const postRest = (url, data, param = '', token) => {
}

const putRest = (url, data, param = '', token) => {
}

const api = {
  del,
  get,
  patch,
  post,
  put,
}

export default api