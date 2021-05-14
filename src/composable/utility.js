export const findArrayIndexByItemId = (aItems, nItemId, sProp) => {
  return aItems.findIndex(item => item[sProp] === nItemId);
}

export const createRandomId = (nMaxVal) => {
  const random = () => Math.floor(Math.random() * nMaxVal);
  return `${random()}-${random()}-${random()}`
}

export const sortByTrueProp = (aItems, sProp) => {
  return aItems.sort((a, b) => a[sProp] && b[sProp] ? 0 : a[sProp] && !b[sProp] ? 1 : -1)
}
