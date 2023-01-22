function flatten(oldArr) {
    console.log(oldArr)
    console.log(oldArr.length)
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_-')
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            console.log("------------------------------")
            console.log(oldArr[i])
            newArr = newArr.concat(flatten(oldArr[i]))
            console.log("----------00000-------------------")
            console.log(oldArr[i])
        } else {
            console.log("---------------------11111--------")
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


