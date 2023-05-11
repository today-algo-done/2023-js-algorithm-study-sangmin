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
        const num2 = num1[2[i]];
        const nextNum = numbers[s[i + 1]];

        if (nextNum && num2 >= nextNum) {
            result += num2;
        } else {
            if (!nextNum) return result + num2;

            result -= num2;
        }
    }
    return result;
}