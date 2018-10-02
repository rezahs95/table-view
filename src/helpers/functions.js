const getObjectOfArrayKeys = (array, objectArray) => array.reduce((acc, arrayId) => [...acc, objectArray[arrayId]], [])

export default {
  getObjectOfArrayKeys,
}