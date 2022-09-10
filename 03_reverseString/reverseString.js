const reverseString = function(string) {
    const stringLetters = string.split("");
    let str = "";
    for (let i = stringLetters.length-1; i >= 0; i--) {
        str += stringLetters[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
