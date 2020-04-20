// Code your solution in this file
// function findMatching(collection,string){
//     let name_array = []
//     for(const user of collection){
//         if (user.toLowerCase() === string.toLowerCase()){
//             name_array.push(user)
//         }
//     }
//     return name_array
// }

function findMatching (list, name) {
    return list.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }

  function fuzzyMatch (list, parName) {
    let lenOfName = parName.length
    return list.filter(function (driverName) {
      return driverName.slice(0,lenOfName) === parName;
    });
  }

  function matchName (list, name) {
    return list.filter(function (driverName) {
      return driverName.name === name;
    });
  }