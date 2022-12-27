function sameFrequency(a, b) {
    let A = String(a).split('').map((num) => {
        return String(num);
    });
    let B = String(b).split('').map((num) => {
        return String(num);
    });
    return JSON.stringify(A.sort()) === JSON.stringify(B.sort());
}
