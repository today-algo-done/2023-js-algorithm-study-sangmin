function averagePair(a, n) {
    // add whatever parameters you deem necessary - good luck!
    let number = 2 * n;
    if (!Number.isInteger(number) || !a.length) {
        return false
    }

    let start = 0;
    let end = a.length - 1
    /** 크기 비교 시작, 끝값 확인 */
    while (start < end) {
        var tmp = a[start] + a[end]
        if (number === tmp) {
            return true
            /**만약 number 가 비교값보다 크면 */
        } else if (number > tmp) {
            /**시작값 증가 */
            start++
        } else {
            /**그게 아니라면 마지막 값 감소 */
            end--
        }
    }
    /** 이도 저도 아니면 실패! */
    return false
}
//PR