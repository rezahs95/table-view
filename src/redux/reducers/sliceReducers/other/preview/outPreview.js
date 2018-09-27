const base = (state, action) => {
  return {
    ...state,
    preview: false,
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