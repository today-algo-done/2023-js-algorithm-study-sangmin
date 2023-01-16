function capitalizeWords(str) {

    return str.map((word) => {
        const cap = word.toUpperCase();
        return cap
    })
    /**
     * return str.map(word => word.toUpperCase());
     */
}

capitalizeWords('abc')
