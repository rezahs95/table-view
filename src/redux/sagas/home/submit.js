import api from '../../../helpers/api'
import urls from '../../../consts/urls'
import types from '../../actions/types'

import {put, call} from "redux-saga/effects"

function* submit(action) {
  const {payload} = action
  const {formValues} = payload
  try {
    yield put({type: types.BASE.OTHER.SET_FILTER, payload: {filter: formValues}})
    const data = yield call(api.post, urls.HOME.SUBMIT, {...formValues})
    console.log(data, 'server response')
    yield put({type: types.SUCCESS.HOME.SUBMIT, payload: {data: data.items}})
    yield put({type: types.BASE.PAGINATION.SET_PAGINATION, payload: {data}})
  } catch (error) {
    const {message} = error
    yield put({type: types.ERRORS.HOME.SUBMIT, message})
  }
}

export default submit