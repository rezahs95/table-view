import types from './types'

const submit = ({formValues, saveInRedux = true}) => ({
  type: types.BASE.HOME.SUBMIT,
  payload: {formValues, saveInRedux}
})

const HomeActions = {
  submit,
}

export default HomeActions