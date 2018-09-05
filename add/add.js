/*jshint esversion: 6 */

let add = (...theArgs) => {
  return theArgs.reduce((current, previous) => { return current + previous; });
};

console.log(add(1));
console.log(add(1, 4));
console.log(add(1, 2, 3, 4));
console.log(add(2413, 423));