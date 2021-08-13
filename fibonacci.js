// let numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,];
/* let fibo = [0, 1]
for (let i = 2; i < 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
 */

function fibonacci(num) {
    if (typeof num != "number") {
        console.log("Please enter a validate number");
    }
    if (num < 2) {
        console.log("Please Enter the positive number ");
    }

    let fibo = [0, 1]
    for (let i = 2; i < 12; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}
let series = fibonacci("10");
console.log('the fibonacci series is : ', series);