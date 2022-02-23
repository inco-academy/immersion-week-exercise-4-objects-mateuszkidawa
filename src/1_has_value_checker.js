module.exports = hasValue;

function hasValue(obj, val) {
  return Object.values(obj).includes(val).toString()
}

console.log(
hasValue({ hello: "bonjour", my: "mon" }, "bonjour") // true
+`
`+ 
hasValue({ hello: "bonjour", my: "mon" }, "hello") // false
+`
`+
hasValue({ hello: "bonjour", my: "mon" }, "tasty") // false
)
