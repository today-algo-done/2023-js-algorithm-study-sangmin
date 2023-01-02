/** a 를 배열로 입력받아서
 * 배열의 갯수가 0이면 1을 반환하고 *0 을 하면 값이 0이 되기 때문에
 * 배열a 의  0번째 부터 배열의 포함되어있는 숫자 대로 slice 해서 서로 곱해준다
 */
// eslint-disable-next-line no-unused-vars
function productOfArray(a = []) {

    if (a.length === 0) {
        return 1;
    }

    return a[0] * (productOfArray(a.slice(1)))

}
//PR