function totalSales(shirtQuantity, pentQuantity, shoeQuantity) {

    if ((shirtQuantity >= 0 && pentQuantity >= 0) && shoeQuantity >= 0) {
        const perShirtPrice = 100;
        const perPentPrice = 200;
        const perShoePrice = 500;
        // per items total price
        const shirtPrice = perShirtPrice * shirtQuantity;
        const pentPrice = perPentPrice * pentQuantity;
        const shoePrice = perShoePrice * shoeQuantity;
        //  total price
        const totalPrice = shirtPrice + pentPrice + shoePrice;
        return totalPrice;

    }
    else {

        return 'Please enter a valid number';

    }
}
console.log(totalSales(10, 5, 1));