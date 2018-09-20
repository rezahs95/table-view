const base = (state, action) => {
}

const success = (state, action) => {
  const {data} = action || {}
  const {user, token} = data || {}
  
  return {
    ...state,
    user,
    token,
  }
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}