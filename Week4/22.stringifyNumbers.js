function stringifyNumbers(obj, arr = []) {
    const str = JSON.stringify(obj);
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];

    }


}

/** Udemy 해결 솔루션 
 * function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
*/

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)


// {
//  num: "1",
//  test: [],
//  data: {
//      val: "4",
//      info: {
//          isRight: true,
//          random: "66"
//      }
//  }
// }
