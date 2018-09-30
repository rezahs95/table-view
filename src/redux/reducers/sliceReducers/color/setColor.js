const base = (state, action) => {
  const {index, color} = action.payload
  state[index] = color
  return {
    ...state,
    color: [...state],
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