// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

/**array와 callback함수를 인자로 받고, array의 요소 중 하나라도 
 * callback 함수의 반환값이 true라면 true를 반환하고 그게 아니라면 false를 반환하는 회귀 함수 구현 */

const isOdd = val => val % 2 !== 0;

/** 솔루션 답안 */
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}


/** 좋은 해설 
 * https://stackoverflow.com/questions/73908045/why-callback-needs-arr0-to-return-true
*/