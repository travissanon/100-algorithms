/*jshint esversion: 6 */

let addTwoDigits = (num) => {
  return num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
};

console.log(addTwoDigits(50));