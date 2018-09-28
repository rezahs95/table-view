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

const onRedirect = () => ({
  type: types.BASE.OTHER.ON_REDIRECT,
  payload: {},
})

const outRedirect = () => ({
  type: types.BASE.OTHER.OUT_REDIRECT,
  payload: {},
})

const OtherActions = {
  onFocus,
  outFocus,
  onPreview,
  outPreview,
  onHomePage,
  outHomePage,
  onRedirect,
  outRedirect
}

export default OtherActions