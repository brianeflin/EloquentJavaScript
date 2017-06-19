function range(start, end, step) {
    var myArray = [];
    if (!step) step = 1;
    if (step > 0) {
        if (end < start) {
            var temp = end;
            end = start;
            start = temp;
        }
        for (var i = 0; i <= end - start; i += step) {
            myArray.push(start + i);
        }
    } else {
        if (end > start) {
            var temp = end;
            end = start;
            start = temp;
        }
        for (var i = 0; i <= start - end; i -= step) {
            myArray.push(start - i);
        }
    }
    return myArray;
}

function sum(arrayOfNumbers) {
    var mySum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        mySum += arrayOfNumbers[i];
    }
    return mySum;
}

var start = 10;
var end = -10;
var step = -1;

console.log (range(start, end, step))
console.log(sum(range(start, end)));