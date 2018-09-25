import otherTypes from './other'
import homeTypes from './home'

const types = {
  RESET: 'RESET',
  BASE: {
    OTHER: otherTypes.BASE,
    HOME: homeTypes.BASE,
  },

  SUCCESS: {
    HOME: homeTypes.SUCCESS,
  },

  ERRORS: {
    HOME: homeTypes.ERROR,
  },
}

export default types