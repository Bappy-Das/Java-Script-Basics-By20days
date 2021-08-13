/* var numbers = [20, 30, 40, 45, 42, 15, 24, 35, 74];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var sum = sum + element;
}
console.log('The total sum is : ', sum);
 */



function sum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        console.log(element);
        // var sum = sum + element;
    }
    // return sum;
}
var number = [20, 30, 40, 45, 42, 15, 24, 35, 74];
var result = sum(number);
console.log('The Total Sum is: ', result);