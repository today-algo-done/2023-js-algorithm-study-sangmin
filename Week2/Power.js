/** 46번 강의 참고하면 쉽게 풀 수있음!! */

function power(a, b) {
    if (b === 0) {
        return 1
    }
    return a * power(a, b - 1)

}
