const stringLength = require('../task-01');
//Arrange
const testMessage = {
  pass: 'String Length is 5',
  error: 'Your String less than "1" Char or more than "10" Char',
};

// Act
const count = stringLength('hello');

const errors = () => {
  stringLength('qqqqqqqqqqqqq');
};

//Assert
it(testMessage.pass, () => {
  expect(count).toBe(5);
});

it(testMessage.error, () => {
  expect(errors).toThrow('Error');
});
