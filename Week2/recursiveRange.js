/**
 * 입력받는 수 대로 1 부터 덧셈 하는거
 * 입력받은 수를 모르니 1씩 빼주면서 나온값을 거꾸로 더해주면 됨!!!
 * 다른 빈공간에 입력받은수 부터 거꾸로 1씩 빼면서 누적
 */

function recursiveRange(a) {

    let tmp = a

    if (a === 0) {
        return 0;
    }

    return tmp += (recursiveRange(a - 1))
}