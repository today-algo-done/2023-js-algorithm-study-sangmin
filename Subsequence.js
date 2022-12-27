function isSubsequence(a, b) {
    // good luck. Add any arguments you deem necessary.
    let inda = 0
    let indb = 0

    while (inda < a.length && indb < b.length) {
        if (a[inda] === b[indb]) {
            inda++
            indb++

        } else {
            indb++
        }
    }
    if (inda === a.length) {
        return false    // true
    } else {
        return true     //false
    }
}