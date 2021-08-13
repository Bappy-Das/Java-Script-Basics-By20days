// function isLeepYear(year) {
//     var isLeepMyYear = year % 4 == 0;
//     return isLeepMyYear;
// }
// var theYear = 2104;
// var myYear = isLeepYear(theYear);
// console.log('Is my yaer is leep year: ', myYear);




function isLeepYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else {
        while (year % 4 == 0 && year % 100 != 0) {
            return true;
        }
        return false;
    }
};

var myYear = 2100;
var leepYear = isLeepYear(myYear);
// console.log('My Year is leep Year', leepYear);

var chandanyear = 2020;
var chandanleepYear = isLeepYear(chandanyear);
console.log('My Year is leep Year', chandanleepYear);




