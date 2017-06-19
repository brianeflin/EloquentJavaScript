function reverseArray(arrayParam) {
    var newArray = [];
    for (var i = arrayParam.length - 1; i >= 0; i--) {
        newArray.push(arrayParam[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arrayParam) {
    var reversedArrayParam = reverseArray(arrayParam);
    for (var i = 0; i <= reversedArrayParam.length - 1; i++) {
        arrayParam[i] = reversedArrayParam[i];
    }
}

var myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray));
console.log(myArray);
reverseArrayInPlace(myArray);
console.log(myArray);