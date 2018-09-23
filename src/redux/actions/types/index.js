import authTypes from './auth'
import otherTypes from './other'

const types = {
  RESET: 'RESET',
  BASE: {
    AUTH: authTypes.BASE,
    OTHER: otherTypes.BASE,
  },

  SUCCESS: {
    AUTH: authTypes.SUCCESS,
  },

  ERRORS: {
    AUTH: authTypes.ERROR,
  },
}

export default types