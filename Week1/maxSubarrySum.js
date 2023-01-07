/**Write a function called maxSubarraySum which accepts
    an array of integers and a number called n. The function
    should calculate the maximum sum of n consecutive
    elements in the array.
 */
function maxSubarraySum(array, num) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length < num) {
        return null;
    }
    var sum = 0;
    for (var i = 0; i < num; i++) {
        sum += array[i]
    }
    for (var i = 1; i <= array.length - num; i++) {
        var tmp = 0;
        for (var j = i; j < i + num; j++) {
            tmp += array[j]
        }
        if (sum < tmp) {
            sum = tmp
        }
    }
    return sum
}

maxSubarraySum([100, 200, 300, 400], 2) // 700

/**
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
*/
//PR