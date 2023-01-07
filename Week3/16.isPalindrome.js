// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(a) {
//     if (a.substr(0) === a.substr(a.length - 1)) {
//         if (a.substr(1) === a.substr(a.length - 2)) {
//             return true;
//         }
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isPalindrome(a) {
    /** https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join */
    return a == a.split("").reverse().join("")
}

/*
while (a.substr(0) === a.substr(a.length - 1)) {
    haf = Math.floor(a.length / 2)
    left = a.slice(0, haf);
    right = a.slice(haf);
    for (let i = 0; i < haf.length; i++) {
        let j = a.length
        left[i] === right[haf.substr(haf.length - j)]
        j--
    }
};
**/