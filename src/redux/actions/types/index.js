import otherTypes from './other'
import homeTypes from './home'
import colorTypes from './color'

const types = {
  RESET: 'RESET',
  BASE: {
    OTHER: otherTypes.BASE,
    HOME: homeTypes.BASE,
    COLOR: colorTypes.BASE,
  },

  SUCCESS: {
    HOME: homeTypes.SUCCESS,
    COLOR: colorTypes.SUCCESS,
  },

  ERRORS: {
    HOME: homeTypes.ERROR,
    COLOR: colorTypes.ERROR,
  },
}

export default types