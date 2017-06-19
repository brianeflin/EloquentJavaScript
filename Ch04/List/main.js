function arrayToList(arrayParam) {
    if (arrayParam.length == 1) {
        return {
            value: arrayParam.shift(),
            rest: null
        };
    } else {
        return {
            value: arrayParam.shift(),
            rest: arrayToList(arrayParam)
        };
    }
}

function listToArray(listParam, arrayParam) {
    if (listParam.rest == null) {
        arrayParam.push(listParam.value);
        return arrayParam;
    } else {
        arrayParam.push(listParam.value);        
        return listToArray(listParam.rest, arrayParam);
    }
}

function prependToList(valueParam, listParam) {
    return {
                value: valueParam,
                rest: listParam
            };
}

function nth(listParam, nthPos, currPos) {
    if (currPos == undefined) currPos = 0;
    if (listParam.rest == null && nthPos > currPos) {
        return undefined;
    } else if (nthPos == currPos) {
        return listParam;
    } else {
        currPos++;
        return nth(listParam.rest, nthPos, currPos);
    }
}

var myArray = [1, 2, 3];
var myList = arrayToList(myArray);
console.log(myList);

var newArray = [];
console.log(listToArray(myList, newArray));

myList = prependToList(0, myList);
console.log(myList);

var myListElement = nth(myList, 4);
console.log(myListElement);