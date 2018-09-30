import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/color'

const other = (state = initialState.color, action) => {
  switch (action.type) {
      /** -------------------------- set color -------------------------> **/
    case types.BASE.COLOR.SET_COLOR:
      return slices.setColor.base(state, action)
      /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.color
    default:
      return state
  }
}

export default other