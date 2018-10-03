const base = (state, action) => {
  const {filter} = action.payload
  return {
    ...state,
    filter: filter,
  }
}

const success = (state, action) => {
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}