const capitalize = (string) => {
  const capital = string.split(' ');
    for (let i in capital) {
      capital[i]=capital[i][0].toUpperCase() + capital[i].substring(1);
    }
    return capital.join(' ');
};
// console.log(capitalize('my name muhmmd usama'));

module.exports = capitalize;