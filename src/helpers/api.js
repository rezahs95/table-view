import {REST_URL} from 'src/consts/urls'

function* del(url, data, param = '') {
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  const response = delRest(url, data, param, token)
  return yield response.json()
}

function* get(url, param = '') {
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  const response = getRest(url, param, token)
  return yield response.json()
}

function* patch(url, data, param = '') {
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  const response = patchRest(url, data, param, token)
  return yield response.json()
}

function* post(url, data, param = '') {
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  const response = yield postRest(url, data, param, token)
  return yield response.json()
}

function* put(url, data, param = '') {
  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NDQsInVzZXJuYW1lIjoibWhvb3NoZGFyIiwiZXhwIjoxNTM5MTYyNjQzLCJlbWFpbCI6ImFzZGFzZGFzZEBhc2FkYWQuY29tIn0.852crIy_U1QoojXZVHaGy1kCayDEs2ZnGA2IE9i5geU'
  const response = putRest(url, data, param, token)
  return yield response.json()
}



async function delRest (url, data, param = '', token) {
  const request = new Request(REST_URL + '/' + url)
  const headers = new Headers()
  headers.append('Authorization', token)
  headers.append('Content-type', 'application/json')
  const init = {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(request, init).then(response => response).catch(error => {throw error})
}

const getRest = (url, param = '', token) => {
  const request = new Request(REST_URL + '/' + url)
  const headers = new Headers()
  headers.append('Authorization', token)
  headers.append('Content-type', 'application/json')
  const init = {
    method: 'GET',
    headers: headers,
  };
  return fetch(request, init).then(response => response).catch(error => {throw error})
}

const patchRest = (url, data, param = '', token) => {
  const request = new Request(REST_URL + '/' + url)
  const headers = new Headers()
  headers.append('Authorization', token)
  headers.append('Content-type', 'application/json')
  const init = {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(request, init).then(response => response).catch(error => {throw error})
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
  return fetch(request, init).then(response => response).catch(error => {throw error})
}

const putRest = (url, data, param = '', token) => {
  const request = new Request(REST_URL + '/' + url)
  const headers = new Headers()
  headers.append('Authorization', token)
  headers.append('Content-type', 'application/json')
  const init = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(request, init).then(response => response).catch(error => {throw error})
}

const api = {
  del,
  get,
  patch,
  post,
  put,
}

export default api