function factorial(a) {
    if (a <= 1) {
        return 1;
    }
    /** 문제에서 factorial zeor(0!) is always 1 이라는 사실에 주목해야됨 */
    if (a < 0) {
        return 0
    }

    return a * factorial(a - 1)
}
//PR