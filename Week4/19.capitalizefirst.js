function capitalizeFirst(str) {
    // add whatever parameters you deem necessary - good luck!
    return str.map((word) => {
        const cap = word.charAt(0).toUpperCase();
        const result = word.slice(1).toLowerCase();
        return cap + result
    })
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car', 'taco', 'banana']))

