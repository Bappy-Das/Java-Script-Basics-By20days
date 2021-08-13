function bappy() {
    // console.log("create fast function");
}
//call the function
bappy();

function bazar(eggPrice) {
    console.log("Total dim kinbo : " + eggPrice + "Takar");
    console.log("EI nen Taka amare den dim")
    var perEggPrice = 8;
    var totalEgg = eggPrice / perEggPrice;
    return totalEgg;
}
var singleEgg = bazar(80);
// console.log("ei nen apnar total Egg : ", singleEgg, " pices");

function addTwoNumber(fast, second) {
    console.log("fast number: ", fast, "and second number", second);
    var sum = fast + second;
    console.log("Total number: ", sum);
    return sum;
}
var fastNumber = 10;
var secondNumber = 20;
var total = addTwoNumber(fastNumber, secondNumber);
console.log("Total number Outside: ", total);