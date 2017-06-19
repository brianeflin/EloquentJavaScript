function deepEqual(element1, element2) {
    if (element1 === undefined || element2 === undefined) {
        return undefined;
    } else if ((typeof element1) != "object" && (typeof element2) != "object") {
        return element1 === element2;
    } else {
        if (element1 === null && element2 === null) {
            return true;
        } else if (element1 === null || element2 === null) {
            return false;
        } else {
            for (var prop in object1) {
                if (element1[prop] != element2[prop]) {
                    return false
                }
            }
            return true;
        }
    }
}

var value1 = 10;
var value2 = "10";
var value3 = 10;
var value4 = "10";
var value5 = null;
var value6 = null;
var object1 = { a: 1, b: 2, c: 3 };
var object2 = { a: 1, b: 2, c: 3 };
var object3 = { a: 1, b: 3, c: 3 };
var object4 = { a: 1, b: 2 };
var object5 = {};
var object6 = object1;

console.log(`${value1} (${typeof value1}) === ${value2} (${typeof value2}) is ${deepEqual(value1, value2)}`);
console.log(`${value1} (${typeof value1}) === ${value3} (${typeof value3}) is ${deepEqual(value1, value3)}`);
console.log(`${value2} (${typeof value2}) === ${value4} (${typeof value4}) is ${deepEqual(value2, value4)}`);
console.log(`${value1} (${typeof value1}) === ${value5} (${typeof value5}) is ${deepEqual(value1, value5)}`);
console.log(`${value2} (${typeof value2}) === ${value5} (${typeof value5}) is ${deepEqual(value2, value5)}`);
console.log(`${value5} (${typeof value5}) === ${value6} (${typeof value6}) is ${deepEqual(value5, value6)}`);

for (var prop in object1) {
    console.log(`object1.${prop} === ${object1[prop]}`);
}
for (var prop in object2) {
    console.log(`object2.${prop} === ${object2[prop]}`);
}
console.log('object1 === object2 is ' + deepEqual(object1, object2));

for (var prop in object3) {
    console.log(`object3.${prop} === ${object3[prop]}`);
}
console.log('object1 === object3 is ' + deepEqual(object1, object3));

for (var prop in object4) {
    console.log(`object4.${prop} === ${object4[prop]}`);
}
console.log('object1 === object4 is ' + deepEqual(object1, object4));

console.log('object1 === object5 is ' + deepEqual(object1, object5));
console.log('object1 === object6 is ' + deepEqual(object1, object6));
