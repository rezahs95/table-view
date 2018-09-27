const base = (state, action) => {
  return {
    ...state,
    homePage: false,
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