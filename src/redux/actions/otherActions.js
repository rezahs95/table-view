import types from './types'

const onFocus = () => ({
  type: types.BASE.OTHER.ON_FOCUS,
  payload: {}
})

const outFocus = () => ({
  type: types.BASE.OTHER.OUT_FOCUS,
  payload: {}
})

const OtherActions = {
  onFocus,
  outFocus,
}

export default OtherActions