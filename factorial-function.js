
/*
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var myNumber = 6;
let thefactorial = getFactorial(myNumber);
console.log('the factorial value is : ', thefactorial);
*/
/*
function getFactorial(number) {
    let i = 1
    let factorial = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var factNumber = 7;
var myFactorial = getFactorial(factNumber);
console.log('The while loop factorial value is : ', myFactorial);
*/
// decrementing loop
function getDecrementingFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let fact = 6;
let myFactValue = getDecrementingFactorial(fact);
console.log("the factorial value via Decrementing Loop : ", myFactValue);