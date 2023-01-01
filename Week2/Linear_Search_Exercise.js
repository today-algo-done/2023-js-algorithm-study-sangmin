function linearSearch(a, b) {
    for (let i = 0; i < a.length; ++i) {
        if (a[i] === b) {
            return i
        }

    }
    return -1;
}
//PR