import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/other'

const other = (state = initialState.other, action) => {
  switch (action.type) {
      /** -------------------------- on focus -------------------------> **/
    case types.BASE.OTHER.ON_FOCUS:
      return slices.onFocus.base(state, action)
      /** -------------------------- out focus -------------------------> **/
    case types.BASE.OTHER.OUT_FOCUS:
      return slices.outFocus.base(state, action)
      /** -------------------------- on preview -------------------------> **/
    case types.BASE.OTHER.ON_PREVIEW:
      return slices.onPreview.base(state, action)
      /** -------------------------- out preview -------------------------> **/
    case types.BASE.OTHER.OUT_PREVIEW:
      return slices.outPreview.base(state, action)
      /** -------------------------- on home page -------------------------> **/
    case types.BASE.OTHER.ON_HOME_PAGE:
      return slices.onHomePage.base(state, action)
      /** -------------------------- out home page -------------------------> **/
    case types.BASE.OTHER.OUT_HOME_PAGE:
      return slices.outHomePage.base(state, action)
      /** -------------------------- set filter -------------------------> **/
    case types.BASE.OTHER.SET_FILTER:
      return slices.setFilter.base(state, action)
    case types.BASE.OTHER.SET_CSV_DATA:
      return slices.setCsvData.base(state, action)
      /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.other
    default:
      return state
  }
}

export default other