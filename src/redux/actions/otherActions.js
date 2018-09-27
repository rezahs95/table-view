import types from './types'

const onFocus = () => ({
  type: types.BASE.OTHER.ON_FOCUS,
  payload: {}
})

const outFocus = () => ({
  type: types.BASE.OTHER.OUT_FOCUS,
  payload: {}
})

const onPreview = () => ({
  type: types.BASE.OTHER.ON_PREVIEW,
  payload: {},
})

const outPreview = () => ({
  type: types.BASE.OTHER.OUT_PREVIEW,
  payload: {},
})

const onHomePage = () => ({
  type: types.BASE.OTHER.ON_HOME_PAGE,
  payload: {},
})

const outHomePage = () => ({
  type: types.BASE.OTHER.OUT_HOME_PAGE,
  payload: {},
})

const OtherActions = {
  onFocus,
  outFocus,
  onPreview,
  outPreview,
  onHomePage,
  outHomePage,
}

export default OtherActions