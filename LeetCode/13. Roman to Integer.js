/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const num1 = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let result = 0;


    for (let i = 0; i < s.length; i++) {
        const num2 = num1[s[i]]; //지금 문자 숫자화
        const nextNum = num1[s[i + 1]]; //다음 문자 숫자화

        if (nextNum && num2 < nextNum) {
            result += nextNum - num2;
            i++;
        } else {
            result += num2;
        }
    }
    return result;
}