import types from './types'

const submit = ({formValues}) => ({
  type: types.BASE.HOME.SUBMIT,
  payload: {formValues}
})

const HomeActions = {
  submit,
}

export default HomeActions