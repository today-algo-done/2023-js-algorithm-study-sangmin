function solve(num) {
    let n = num;
    const arr = [];

    for (let i; i < n.length; i++) {
        let a = num.indexOf(0);

        if (a !== 0) {
            arr.append(a)
        } else {
            arr.pop()
        }
        return arr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        })
    }

}

solve(43040)