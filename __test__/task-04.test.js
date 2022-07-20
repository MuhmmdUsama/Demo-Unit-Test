const capitalize = require('../task-04');

// Arreng
const testMessag = {
  success: 'All First Letters Are Capital',
};

// Act

const cap = capitalize('my name muhmmd usama');

// Assert
it(testMessag.success, () => {
  expect(cap).toBe('My Name Muhmmd Usama');
});
