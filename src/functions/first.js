const http = require('http');

const summaryTwoNumbers = (first, second) => {
  return first + second;
};

const calculateTwoNumbers = (first, second, operation) => {
  if (
    typeof first !== 'number' ||
    typeof second !== 'number' ||
    typeof operation !== 'string'
  ) {
    return NaN;
  }

  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return first / second;
    default:
      return NaN;
  }
};

const getUsers = () => {
  const testData = {
    data: [
      {id: 7, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},
      {id: 8, email: "lindsay.ferguson@reqres.in", first_name: "Lindsay", last_name: "Ferguson", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},
      {id: 9, email: "tobias.funke@reqres.in", first_name: "Tobias", last_name: "Funke", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},
      {id: 10, email: "byron.fields@reqres.in", first_name: "Byron", last_name: "Fields", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},
      {id: 11, email: "george.edwards@reqres.in", first_name: "George", last_name: "Edwards", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},
      {id: 12, email: "rachel.howell@reqres.in", first_name: "Rachel", last_name: "Howell", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}
    ],
    length: 6,
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
  };

  return new Promise(resolve => {
    resolve(testData);
  })
};

module.exports = {
  summaryTwoNumbers,
  calculateTwoNumbers,
  getUsers,
};
