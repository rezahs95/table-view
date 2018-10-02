import {createSelector} from 'reselect'
import helpers from 'src/helpers/functions'

const getDataset = state => state.data
// const getUserDataset = (state, props) => {
//   const {userId} = props
//   const usersList = state.users
//   if (usersList[userId] && usersList[userId].dataset)
//     return usersList[userId].dataset.content
//   else return undefined
// }

/** this selector selects dataset. **/
export const makeGetDataset = (state, props) => {
  return createSelector(
      // [getDataset, getUserDataset],
      // (dataset, userDataset) => {
      [getDataset],
      (dataset) => {
        // if (dataset && Object.keys(dataset).length !== 0 && dataset.constructor === Object && userDataset) {
        // const arrayDataset = helpers.getObjectOfArrayKeys(userDataset, dataset)
        if (dataset && Object.keys(dataset).length !== 0 && dataset.constructor === Object) {
          const arrayDataset = helpers.getObjectOfArrayKeys([1, 2, 3, 4, 5, 6], dataset)
          return [...arrayDataset]
        }
        return []
      }
  )
}