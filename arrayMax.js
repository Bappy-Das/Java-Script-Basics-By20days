function getMax(age) {
    let maximum = age[0];
    for (let i = 0; i < age.length; i++) {
        let element = age[i];
        if (maximum < element) {
            maximum = element;
        }
    }
    return maximum;
}
let ages = [20, 32, 52, 64, 25, 36, 45, 14];
let oldest = getMax(ages)
console.log('The Oldest Is : ', oldest);