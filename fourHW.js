// Celcius To farenhight convert function 

function celciusTofarenHight(celcius) {
    let result = 9 * celcius / 5 + 32;
    return result;
}
let mycelcius = 2;
let myResult = celciusTofarenHight(mycelcius);
console.log('The result is :', myResult, ' Farenhight');



// farenhight To Celcius convert function 

function farenhightTOCelcius(farenhight) {
    let resultfaren = 5 * (farenhight - 32) / 9;
    return resultfaren;
}
let myFarenhight = 41;
let myResultFaren = farenhightTOCelcius(myFarenhight);
console.log('The result is :', myResultFaren, ' Celcius');




// result calculation
function myGrade(mark) {
    if (mark >= 80) {
        console.log("This is A+")
    }
    else if (mark < 80 || mark >= 70) {
        console.log("This is A Grade")
    }
    else if (mark < 70 || mark >= 60) {
        console.log("This is A- Grade")
    }
    else {
        console.log("You are Fail")
    }
}
let myMark = 81;
let resultgade = myGrade(myMark);




function intarestRate(revenue, percent) {
    let interest = revenue * (percent / 100);
    return interest;
}
let myinvest = 2000;
let interestPercent = 10
let myInterest = intarestRate(myinvest, interestPercent);
console.log('Total interest from the invest :', myInterest);