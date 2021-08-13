function inchToFeet(inchs) {
    var feet = inchs / 12;
    return feet;
}

var dadiInches = 150;
var dadifeet = inchToFeet(dadiInches);
console.log(dadifeet);