function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let set = new Set(args)
    return set.size !== args.length;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
//PR