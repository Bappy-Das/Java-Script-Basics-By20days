function woodCalculator(chair, table, sofa) {
    const perchair = 8;
    const perTable = 10;
    const perSofa = 14;

    const chairQuantity = perchair * chair;
    const tableQuantity = perTable * table;
    const sofaQuantity = perSofa * sofa;

    const totalwood = chairQuantity + tableQuantity + sofaQuantity;
    return totalwood;
}
const chair = 3;
const sofa = 4;
const table = 2;
const myFurniture = woodCalculator(chair, table, sofa);
console.log('For my Total furiture wood needed', myFurniture);