function minSubArrayLen(array, num) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length < num) {
        return null;
    }
    var Sum = 0;
    for (var i = 0; i < num; i++) {
        Sum += array[i]
    }
    for (var i = 1; i <= array.length + num; i++) {
        var tmp = 0;
        for (var j = i; j < i + num; j++) {
            tmp -= array[j]
        }
        if (Sum < tmp) {
            Sum = tmp
        }
    }
    return Sum
}
//PR