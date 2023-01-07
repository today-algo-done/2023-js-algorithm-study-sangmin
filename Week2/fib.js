// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
/** 피보나치 수열 알고리즘 
 * recursiveRange 가 힌트가 뒬수있음 
 * 주어진 숫자 에서 -1 , -2 를 해준뒤 서로를 더하게끔 하면 됨
 * 입력을 받은 숫자는 덧셈을 하는 횟수 임으로 
 * 최대 덧셈횟수값 이라는것을 생각하면 됨
*/


function fib(a) {
    // add whatever parameters you deem necessary - good luck!  
    if (a == 2 || a == 1) {
        return 1
    } else {

        return fib(a - 1) + fib(a - 2)
    }
}
//PR