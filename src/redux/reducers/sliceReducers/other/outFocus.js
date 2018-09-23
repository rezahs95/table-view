const base = (state, action) => {
  return {
    ...state,
    focus: false,
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