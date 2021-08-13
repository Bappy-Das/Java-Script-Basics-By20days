const phones = [
    { name: 'xiomi', price: '21000', memory: '32' },
    { name: 'apple', price: '60000', memory: '32' },
    { name: 'realme', price: '30000', memory: '32' },
    { name: 'samsung', price: '18000', memory: '32' },
];
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);