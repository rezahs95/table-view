import {createSelector} from 'reselect'
import helpers from 'src/helpers/functions'

const getDataset = state => state.data
const getPagination = state => state.pagination.items

/** this selector selects dataset. **/
export const makeGetDataset = () => {
  return createSelector(
      [getDataset, getPagination],
      (dataset, paginationItems) => {
        if (dataset && Object.keys(dataset).length !== 0 && dataset.constructor === Object && paginationItems) {
          const arrayDataset = helpers.getObjectOfArrayKeys(paginationItems, dataset)
          return [...arrayDataset]
        }
        return []
      }
  )
}