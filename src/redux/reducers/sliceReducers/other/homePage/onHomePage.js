const base = (state, action) => {
  return {
    ...state,
    homePage: true,
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