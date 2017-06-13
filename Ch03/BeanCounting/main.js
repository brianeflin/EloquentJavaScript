function countBs(str) {
    var numOfBs = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "B") {
            numOfBs++;
        }
    }
    return numOfBs;
}

function countChar(str, ch) {
    var numOfChar = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == ch) {
            numOfChar++;
        }
    }
    return numOfChar;
}

console.log(countChar("AaBbCc", "a"));
console.log(countChar("BbBbBb", "b"));