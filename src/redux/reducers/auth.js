import initialState from './initialState'
import types from '../actions/types'
import slices from './sliceReducers/auth'

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    /** -------------------------- sign-in -------------------------> **/
    case types.SUCCESS.AUTH.SIGN_IN:
      return slices.signIn.success(state, action)
    /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.auth
    default:
      return state
  }
}

export default auth