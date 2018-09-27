const base = (state, action) => {
  return {
    ...state,
    preview: true,
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