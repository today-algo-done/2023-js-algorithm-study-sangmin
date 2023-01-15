function stringifyNumbers() {
    let num = 0

    //  for (const k in objected) {
    //      if (objected[k].constructor === Object) {
    //          num += nestedEvenSum(objected[k])
    //      } else if (typeof objected[k] === "number" && objected[k] % 2 === 0) {
    //          num += objected[k];
    //      }
    //  }

    return num;
}


/*
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
/*

stringifyNumbers(obj)

/*
{
 num: "1",
 test: [],
 data: {
     val: "4",
     info: {
         isRight: true,
         random: "66"
     }
 }
}
*/