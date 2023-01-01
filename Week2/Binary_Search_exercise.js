function binarySearch(a, b) {
    var start = 0;
    var end = a.length - 1;
    var mid = Math.floor((start + end) / 2)

    while (start <= end) {
        if (a[mid] === b) {
            return mid
        }
        if (a[mid] < b) {
            start = mid + 1
        } else {
            end = mid - 1
        }
        mid = Math.floor((start + end) / 2)
    }
    return -1;
}


