
// for of loop

const friends = ['abul', 'babul', 'hridoy', 'kabul', 'subrata', 'chandan', 'subrata', 'hridoy'];
// function getUnique(fndName) {
//     const unique = [];
//     for (const element of fndName) {
//         console.log(element);
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;

// }

// const result = getUnique(friends);
// console.log(result);


// for loop



function getNewfriend(nwName) {
    const newUnique = [];
    for (let i = 0; i < nwName.length; i++) {
        const newElement = nwName[i];

        console.log(newElement);

        if (newUnique.indexOf(newElement) == -1) {
            newUnique.push(newElement);
        }
    }
    return newUnique;

}
const newResult = getNewfriend(friends);
console.log("This is new result : ", newResult);