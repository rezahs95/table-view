const base = (state, action) => {
  const {data} = action.payload
  return {
    ...state,
    csvData: data.items,
  }
}

const success = (state, action) => {
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}