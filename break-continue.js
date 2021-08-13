// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }


// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i == 10) {
//         break;
//     }
// }

// var numbers = [42, 45, 3, 56, 18, 97, 64, 100, 101, 155, 165, 99];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number == 100) {
//         break;
//     }

// }

var numbers = [42, 45, 3, 56, 18, 97, 64, 100, 101, 155, 165, 89];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}

