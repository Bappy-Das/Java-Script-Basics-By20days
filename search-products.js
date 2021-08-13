const products = [
    { name: 'samsung', price: '12000' },
    { name: 'xiomi', price: '18000' },
    { name: 'lenovo', price: '20000' },
    { name: 'apple', price: '102000' },
    { name: 'vivo', price: '10000' },
    { name: 'realme', price: '15000' }
]
// .toLowerCase if for convert text in lowercase in backend 
function searchProducts(products, searchtext) {
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchtext.toLowerCase()) != -1) {
            console.log(name);
        }
    }
}

searchProducts(products, 'Xiomi');