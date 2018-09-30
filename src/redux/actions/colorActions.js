import types from "./types/index";

const setColor = ({index, color}) => ({
  type: types.BASE.COLOR.SET_COLOR,
  payload: {index, color},
})

const ColorActions = {
  setColor,
}

export default ColorActions