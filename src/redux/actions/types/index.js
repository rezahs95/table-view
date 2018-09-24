import authTypes from './auth'
import otherTypes from './other'
import homeTypes from './home'

const types = {
  RESET: 'RESET',
  BASE: {
    AUTH: authTypes.BASE,
    OTHER: otherTypes.BASE,
    HOME: homeTypes.BASE,
  },

  SUCCESS: {
    AUTH: authTypes.SUCCESS,
    HOME: homeTypes.SUCCESS,
  },

  ERRORS: {
    AUTH: authTypes.ERROR,
    HOME: homeTypes.ERROR,
  },
}

export default types