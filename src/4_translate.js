module.exports = translate;

function translate(dic, sent) {
  // TODO Implement me.
  // let trans="";
  let trans = sent.split(" ");
  // console.log(trans)
  for (let i = 0; i < trans.length; i++) {
    for (let key in dic) {
      if (trans[i] == key) {
        // console.log(i);
        //   console.log(`trans[i] ${i} = ` + trans[i])
        //   console.log(`dic[key] ${key} = ` + dic[key])
        trans[i] = dic[key];
      }
      else if (trans[i] !== key){
        trans = 'Error: missing value'
      }
    }
  }

  return trans;
}

console.log(
  translate(
    {
      je: "I",
      suis: "am",
      pere: "father",
      ton: "your",
    },
    "je suis ton pere"
  ) // 'I am your father'
);

console.log(
  translate(
    {
      the: "le",
      cute: "mignon",
      your: "ton",
      dog: "chien",
      is: "est",
    },
    "the dog is cute"
  ) // 'le chien est mignon'
);
console.log(
  translate(
    {
      the: "le",
      cute: "mignon",
      your: "ton",
      dog: "chien",
      is: "est",
    },
    "the dog is fluffy"
  ) // 'Error: missing value'
);

// const user = {
//   name: "Piotr",
//   type: "node",
//   info: "something",
//   id: 21,
// };
// const { name, info } = user;

// console.log("wynik:", name, info);
