import types from './types'

const signIn = ({username, password, rememberMe}) => ({
  type: types.BASE.AUTH.SIGN_IN,
  payload: {
    username,
    password,
    rememberMe,
  }
})

const AuthActions = {
  signIn,
}

export default AuthActions