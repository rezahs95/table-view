import {apply, select} from 'redux-saga/effects'

import {REST_URL} from 'src/consts/urls'

function* del(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, delRest, [url, data, param, token])
}

async function get(url, param = '') {
  // const token = yield select(state => state.auth.token)
  // yield apply({}, getRest, [url, param, token])
  // const token = select(state => state.auth.token)
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  return await getRest(url, param, token)
}

function* patch(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, patchRest, [url, data, param, token])
}

async function post(url, data, param = '') {
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  const response = await postRest(url, data, param, token)
  const dataFromResponse = await response.json().then(data => data).catch(error => error)
  console.log(dataFromResponse, 'dataaaaa')
  return dataFromResponse
}

function* put(url, data, param = '') {
  const token = yield select(state => state.auth.token)
  yield apply({}, putRest, [url, data, param, token])
}
//TODO: fill this with fetch js function
const delRest = (url, data, param = '', token) => {
}

const getRest = (url, param = '', token) => {
  const request = new Request(REST_URL + '/' + url + '/')
  const headers = new Headers()
  headers.append('Authorization', token)
  const init = {
    method: 'GET',
    headers: headers,
  };
  return fetch(request, init).then(response => response).catch(error => error)
}

const patchRest = (url, data, param = '', token) => {
}

const postRest = (url, data, param = '', token) => {
  const request = new Request(REST_URL + '/' + url)
  const headers = new Headers()
  headers.append('Authorization', token)
  headers.append('Content-type', 'application/json')
  const init = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(request, init).then(response => response).catch(error => error)
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