module.exports = countOccurences;

function countOccurences(chrs) {
  // TODO Implement me.
  let obj = {};
  let count = 0;
  chrs = chrs.split(" ");
  // console.log(typeof(chrs))

  // let word = chrs.filter(element => element === element)
  // console.log(chrs[0])
  for (let i = 0; i < chrs.length; i++) {
    if (obj[chrs[i]]) {
      obj[chrs[i]] += 1;
    } else {
      obj[chrs[i]] = 1;
    }
  }
  // console.log(count);
  console.log(obj);
  // return obj;

  let objInv = {};
  for (let key in obj) {
    // console.log("obj[key] = " + obj[key]);
    // console.log("objInv[key] = " + objInv[key]);
    if (objInv[obj[key]]) {
      // console.log("obj[key] = " + obj[key]);
      objInv[obj[key]].push(key);
      // console.log("objInv = " + objInv);
    } else if (!objInv[obj[key]]) {
      // console.log("obj[key] = " + obj[key]);
      // console.log("objInv[key] = " + objInv[key]);
      objInv[obj[key]] = [key];
    }
  }

  console.log(objInv);
}

countOccurences("hello is it you hello hello"); // {
// '1': [ 'is', 'it', 'you' ],
// '3': [ 'hello' ]
// }
