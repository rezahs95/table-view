import api from '../../../helpers/api'
import urls from '../../../consts/urls'
import types from '../../actions/types'

import {put, call} from "redux-saga/effects"

function* submit(action) {
  const {payload} = action
  const {formValues, saveInRedux} = payload
  try {
    const data = yield call(api.post, urls.HOME.SUBMIT, {...formValues})
    yield put({type: types.SUCCESS.HOME.SUBMIT, payload: {data: data.items, saveInRedux}})
    if(saveInRedux) {
      yield put({type: types.BASE.OTHER.SET_FILTER, payload: {filter: formValues}})
      yield put({type: types.BASE.PAGINATION.SET_PAGINATION, payload: {data}})
    }
    else {
      yield put({type: types.BASE.OTHER.SET_CSV_DATA, payload: {data}})
    }
  } catch (error) {
    const {message} = error
    yield put({type: types.ERRORS.HOME.SUBMIT, message})
  }
}

export default submit