function centimeterToMeter(centimeter) {
    const myCentimeter = centimeter / 100;
    return myCentimeter;
}
let centimeterGiven = 5;
let myResult = centimeterToMeter(centimeterGiven);
console.log(myResult);