const base = (state, action) => {
  const {data} = action.payload
  const {items, page, endPage, resultNumber} = data

  const arrayOfItemsId = items.map(item => item.id)
  return {
    ...state,
    items: arrayOfItemsId,
    page,
    endPage,
    resultNumber,
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