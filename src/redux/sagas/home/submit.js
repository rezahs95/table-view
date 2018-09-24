import api from '../../../helpers/api'
import urls from '../../../consts/urls'
import types from '../../actions/types'
import client from '../../../helpers/client'

import {put, take, fork, call} from "redux-saga/effects"

function* submit(action) {
  const {payload} = action
  const {formValues} = payload
  try {
    //TODO: need to change to fetch js
    const data = yield fork(api.post, urls.HOME.SUBMIT, {formValues})
    yield put({type: types.SUCCESS.HOME.SUBMIT, data: {data}})
  } catch (error) {
    const {message} = error
    yield put({type: types.ERRORS.HOME.SUBMIT, message})
  }
}

export default submit