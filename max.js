/* var fstNumber = 200;
var secondNumber = 300;
if (fstNumber > secondNumber) {
    console.log('This is largest unmber : ', fstNumber);
}
else {
    console.log('This is largest NUmber :', secondNumber);
} */


var fstNumber = 200;
var secondNumber = 300;
var thirdNumber = 400;
/* if (fstNumber > secondNumber && fstNumber > thirdNumber) {
    console.log('This is largest unmber : ', fstNumber);
}
else if (secondNumber > fstNumber && secondNumber > thirdNumber) {
    console.log('This is largest NUmber :', secondNumber);
}
else {
    console.log('This is largest Number : ', thirdNumber);
} */



/* var largest = Math.max(fstNumber, secondNumber, thirdNumber);
console.log(largest); */



/* function largest(fast, second) {
    if (fast > second) {
        return fast;
    }
    else {
        return second;
    }
}
var theNumber = largest(20, 300);
console.log(theNumber); */

// input three number and find largest via function
/* function largest(fast, second, third) {
    if (fast > second && fast > third) {
        return fast;
    }
    else if (second > fast && second > third) {
        return second;
    }
    else {
        return third;
    }
}
var theNumber = largest(20, 300, 400);
console.log(theNumber);
 */


function largest(fast, second, third) {
    if (fast < second && fast < third) {
        return fast;
    }
    else if (second < fast && second < third) {
        return second;
    }
    else {
        return third;
    }
}
var theNumber = largest(20, 300, 400);
console.log("The Lowest number is : ", theNumber);


