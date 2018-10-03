import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/pagination'

const pagination = (state = initialState.pagination, action) => {
  switch (action.type) {
      /** -------------------------- set pagination -------------------------> **/
    case types.BASE.PAGINATION.SET_PAGINATION:
      return slices.setPagination.base(state, action)
      /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.pagination
    default:
      return state
  }
}

export default pagination