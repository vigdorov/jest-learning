const {isEmpty, compact, isNil} = require('lodash');

const createUrl = (obj) => {
  if (isEmpty(obj)) {
    return '';
  }

  const dirtyList = Object.keys(obj).map(key => {
    const value = obj[key];
    return isNil(value) ? '' : `${key}=${value}`;
  });

  const clearList = compact(dirtyList);

  return `?${clearList.join('&')}`;
};

const clearString = (str) => {
  let result = '';

  for (let letter of str) {
    if (letter !== ' ') {
      result += letter;
    }
  }

  return result;
};

module.exports = {
  createUrl,
  clearString,
};
