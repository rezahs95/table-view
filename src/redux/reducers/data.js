import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/data'

const data = (state = initialState.data, action) => {
  switch (action.type) {
      /** -------------------------- submit -------------------------> **/
    case types.SUCCESS.HOME.SUBMIT:
      return slices.submit.success(state, action)
      /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.data
    default:
      return state
  }
}

export default data