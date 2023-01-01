function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const look = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        look[letter] ? look[letter] += 1 : look[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!look[letter]) return false;
        else {
            look[letter] -= 1;
        }
    }

    return true
}
