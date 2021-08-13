// const products = [
//     { name: 'shirt', price: 800 },
//     { name: 'pant', price: 1000 },
//     { name: 'phone', price: 32000 },
//     { name: 'belt', price: 400 },
// ];

// let total = 0;
// for (const product of products) {
//     total = total + product.price;
// }
// console.log(total);

const carts = [
    { name: 'pant', price: 1000, quantity: 2 },
    { name: 'shirt', price: 800, quantity: 3 },
    { name: 'phone', price: 32000, quantity: 1 },
    { name: 'belt', price: 400, quantity: 2 },
];
let cartTotal = 0;
for (const cart of carts) {
    const productTotal = cart.price * cart.quantity;
    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal);