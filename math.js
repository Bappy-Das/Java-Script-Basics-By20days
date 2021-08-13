
// always convert to the upper number 
var number = 4.26565;
var result = Math.ceil(number);
console.log('This is for ceil number: ', result);



// always convert to the lower number 
var number = 4.66565;
var result = Math.floor(number);
console.log('This is for floor number: ', result);


// always conver to the closest number 
var number = 7.26565;
var result = Math.round(number);
console.log('This is for round number: ', result);


// always random number
var randomNnumber = Math.random() * 6;
var convertDecimal = Math.round(randomNnumber);
console.log('the random number is up to 6 is : ', convertDecimal);