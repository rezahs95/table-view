import authTypes from './auth'

const types = {
  RESET: 'RESET',
  BASE: {
    AUTH: authTypes.BASE,
  },

  SUCCESS: {
    AUTH: authTypes.SUCCESS,
  },

  ERRORS: {
    AUTH: authTypes.ERROR,
  },
}

export default types