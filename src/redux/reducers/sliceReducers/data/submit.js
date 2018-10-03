const base = (state, action) => {
}

const success = (state, action) => {
  const {data, saveInRedux} = action.payload
  if(saveInRedux){
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
  else{
    return state
  }
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}