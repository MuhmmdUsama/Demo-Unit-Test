const reverseString = require('../task-02');

// Arrange
const testMessag = {reverse:'Its Reversed' }

// Act
const revString = reverseString('usama');


// Assert
it(testMessag.reverse, ()=>{
    expect(revString).toBe('amasu')
})