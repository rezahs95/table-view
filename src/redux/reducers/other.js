import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/other'

const other = (state = initialState.other, action) => {
  switch (action.type) {
      /** -------------------------- on focus -------------------------> **/
    case types.BASE.OTHER.ON_FOCUS:
      return slices.onFocus.base(state, action)
      /** -------------------------- onut focus -------------------------> **/
    case types.BASE.OTHER.OUT_FOCUS:
      return slices.outFocus.base(state, action)
      /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.other
    default:
      return state
  }
}

export default other