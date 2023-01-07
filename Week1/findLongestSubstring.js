function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!
    var n = 0
    var current = ''

    if (str.length < 2) {
        return str.length
    }
    /** str의 길이만큼 반복 */
    for (let i = 0; i < str.length; i++) {
        current = current.substring(current.indexOf(str[i] + 1))
        current += str[i]

        if (current.length > n) {
            n = current.length
        }
    }
    return n
}
//PR