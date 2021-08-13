/*
var n = 7;
for (var i = 1; i <= n; i++) {
    var result = i * n;
    console.log('the result is: ', result);
}
*/

var result = 7 * 6 * 5 * 4 * 3 * 2 * 1;
console.log('This raw', result);


var number = 7;
var factorial = 1;
for (var i = 1; i <= number; i++) {
    console.log('This is the value of I: ', i);
    var factorial = factorial * i;
    console.log('This is the value of factorial ', factorial);
}
console.log(factorial);