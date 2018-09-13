let allLongestStrings = (arr) => {
  return arr.sort().filter( str => str === arr[arr.length - 1] );
}

console.log(
  allLongestStrings(['ayy', 'ayyye', 'ay', 'ayyye'])
)