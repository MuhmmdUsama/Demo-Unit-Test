const stringLength = require('../task-01');

test('returns string characters count', () => {
  expect(stringLength('hello')).toBe(5);
});
