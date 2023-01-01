

function charCount(str) {
    //do Somthing
    //return an object with keys that are lowercase alphanumeric characters in the string;
    //values should be the

}

function charCount(str) {
    //loop over string, for each charcter....
    var result = {};
    //loop over string, for each character......
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        // if the char is a number/ letter AND is a key in  object, add one to count
        if (result[char] > 0) {
            result[char]++
        }//if the char is a  number/letter AND not in object, add it to object and set value to 1 
        else {
            result[char] = 1;

        }
    }


    //if chatacter is somthing else( space, period, etc...) don't do anything
    //return object at end
    return result
}
