const cal = require('../task-03');

// Arreng

const testMessage = {
  add: 'Sum any count of number',
  sub: 'Subtract any count of number',
  div: 'Divide any count of number',
  multi: 'Multiply any count of number',
};

// Act
const sum = cal.add(10, 5);
const sub = cal.sub(10, 5);
const div = cal.div(10, 5);
const multi = cal.multi(10, 5);

// Assert

it(testMessage.add,() => { expect(sum).toBe(15) })
it(testMessage.sub,() => { expect(sub).toBe(5) })
it(testMessage.div,() => { expect(div).toBe(2) })
it(testMessage.multi,() => { expect(multi).toBe(50) })
