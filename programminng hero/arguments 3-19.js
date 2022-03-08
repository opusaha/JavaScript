function addNumbers(a,b) {
    return a+b;
}
var result = addNumbers (3,5);
console.log(result);

// normal vabe joto ta input debo totta parameter receive kore then kaj kora hoiche eaikhane.

function addNumbers2() {
    var sum= 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }   return sum;
}
var result1 = addNumbers2(1,2,3,4,5,6,7,8,9,10)
console.log(result1);

// eaikhane arguments program er bebohar kore unlimited input niye kaj kora hoice.