let largestOfFour = (arr) => {
  return arr.map(set => {
    return set.reduce((currentInt, prevInt) => {
      return currentInt > prevInt ? currentInt : prevInt
    });
  })
}

console.log(
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
)