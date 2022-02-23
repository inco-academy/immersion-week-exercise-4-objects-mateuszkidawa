module.exports = groupFamilies;

function groupFamilies(arrData) {
  let objData = {};
  // console.log(arrData);
  for (let i = 0; i < arrData.length; i++) {
    // Object.keys(objData)=arrData[i].surname
    // console.log(arrData[i].surname)

    // console.log(Object.keys(objData))
    // console.log(objData.surname)
    // console.log(arrData.surname)
    // console.log()

    // console.log(arrData[i].surname)
    // console.log("tak")
    // console.log(objData);
    //   console.log(arrData.surname)
    //
    if (objData[arrData[i].surname]) {
      objData[arrData[i].surname].push(arrData[i].name);
    } else if (!objData[arrData[i].surname]) {
      objData[arrData[i].surname] = [arrData[i].name];
    }
  }

  console.log(objData);
  return objData;
}

groupFamilies([
  { name: "Barack", surname: "Obama" },
  { name: "Michelle", surname: "Obama" },
]); // { Obama: [ 'Barack', 'Michelle' ] }

groupFamilies([
  {"name": "Barack",   "surname": "Obama"},
  {"name": "Michelle", "surname": "Obama"},
  {"name": "Donald",   "surname": "Trump"}]
) // { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
