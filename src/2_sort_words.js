module.exports = sortWords;

function sortWords(arr) {
  // TODO Implement me.
  let obj = {
    odd: [],
    even: [],
  };
  // console.log(typeof(obj))
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length%2==0) {
      obj.even.push(arr[i]);
    }else{
      obj.odd.push(arr[i])
    }
  }
  console.log(obj)
  return obj;
}

console.log(
  sortWords([]) + // {
    // odd:  [],
    // even: []
    // }
    `
` +
    sortWords(["work", "hard", "mommy"]) + // {
    // odd:  [ 'mommy' ],
    // even: [ 'work', 'hard' ]
    // }
    `
` +
    sortWords(["oh!", "ah!", "hi", "my"]) // {
  // odd:  [ 'oh!', 'ah!' ],
  // even: [ 'hi', 'my' ]
  // }
);

