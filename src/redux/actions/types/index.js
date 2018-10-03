import otherTypes from './other'
import homeTypes from './home'
import colorTypes from './color'
import paginationTypes from './pagination'

const types = {
  RESET: 'RESET',
  BASE: {
    OTHER: otherTypes.BASE,
    HOME: homeTypes.BASE,
    COLOR: colorTypes.BASE,
    PAGINATION: paginationTypes.BASE,
  },

  SUCCESS: {
    HOME: homeTypes.SUCCESS,
    COLOR: colorTypes.SUCCESS,
    PAGINATION: paginationTypes.SUCCESS,
  },

  ERRORS: {
    HOME: homeTypes.ERROR,
    COLOR: colorTypes.ERROR,
    PAGINATION: paginationTypes.ERROR,
  },
}

export default types