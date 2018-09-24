const base = (state, action) => {
}

const success = (state, action) => {
  const {data} = action.payload
  const indexedDataServer = {}
  data.forEach(DataServer => {
    const prevDataServer = state[DataServer.id]
    indexedDataServer[DataServer.id] = {...prevDataServer, ...DataServer}
  })
  return {
    ...state,
    ...indexedDataServer,
  }
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}