function centimeterToMeter(meter) {
    const myMeter = meter * 100;
    return myMeter;
}
let meterGiven = 10;
let myResult = centimeterToMeter(meterGiven);
console.log(myResult);