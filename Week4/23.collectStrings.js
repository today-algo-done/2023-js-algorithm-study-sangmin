
function collectStrings(obj, arr = []) {
    for (let k in obj) {
        if (typeof obj[k] === 'object') {
            arr = arr.concat(collectStrings(obj[k]))
        } else if (typeof obj[k] === 'string') {
            arr.push(obj[k])
        }
    }
    return arr
}



const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


collectStrings(obj) // ["foo", "bar", "baz"])s