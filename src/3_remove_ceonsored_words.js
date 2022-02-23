module.exports = rmCensored;

function rmCensored(obj) {
  // TODO Implement me.
  for (let key in obj) {
    // console.log("key.indexOf('*') = " + key.indexOf('*'))
    if(key.includes('*') || obj[key].includes('*')){
      delete obj[key];
      // console.log(obj[key])
    }
  }
}

const swearWords = {
  "s*it": "m*rde",
  "sweet jesus": "doux jesus",
  "f***": "",
  omg: "w*sh",
};
rmCensored(swearWords);
console.log(swearWords) // { 'sweet jesus': 'doux jesus' }

const veggies = {
  potato: "starch",
  "spin*ch": "green",
  collard: "green",
  tomato: "fr*it",
};
rmCensored(veggies);
console.log(veggies) // { potato: 'starch', collard: 'green' }
