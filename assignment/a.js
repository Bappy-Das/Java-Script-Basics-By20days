//Problem-1  Seer to Mon convert

function seerToMon(seer) {
    if (seer < 0) {
        return "Please entern positive number"
    }
    else {
        // 40 seer=1 Mon
        const kg = seer / 40;
        return kg.toFixed(2);
    }
}
const mySeer = 60;
let result = seerToMon(mySeer);
console.log(result);


//Problem-2 Total Sales

function totalSales(shirt, pant, shoe) {
    // per Product Price

    const perShirt = 100;
    const perPant = 100;
    const pershoe = 100;

    // if the value is 0 or not less then 0
    if ((shirt >= 0 && pant >= 0) && shoe >= 0) {
        const shirtPrice = 100 * shirt;
        const pantPrice = 200 * pant;
        const shoePrice = 500 * shoe;

        // Total Price
        const total = shirtPrice + pantPrice + shoePrice;
        return total;

    }
    else {
        return "Please Enter positive number";
    }
}
const myShirt = 1;
const myPant = 2;
const myShoe = 3;
const totalPrice = totalSales(myShirt, myPant, myShoe);
console.log(totalPrice);


//Problem-3 Delivery Cost

function deliveryCost(shirt) {
    if (shirt >= 0) {

        // for first 100 shirt 
        if (shirt <= 100) {
            let first100 = shirt * 100;
            return first100;
        }
        // more then 100 and less then 200
        else if (shirt <= 200) {
            let first100From200 = 100 * 100;
            let rest100 = shirt - 100;
            let secondHalf = rest100 * 80;
            let total200Price = first100From200 + secondHalf;
            return total200Price;
        }

        // more then 200
        else {
            let first100From200Up = 100 * 100;
            let upper100 = 200 - 100;
            let second200From200up = upper100 * 80;
            let restShirt = shirt - 200;
            let upper200 = restShirt * 50;
            let totalUp200 = first100From200Up + second200From200up + upper200;
            return totalUp200;
        }
    }
    else {
        return "Enter Valid number";
    }
}
let totalShirt = 305;
let costTotal = deliveryCost(totalShirt);
console.log(costTotal);



//Problem-4 Perfect Friend

const friends = [5, 'Chandan', 50000, 'Sayem', 'Touhiduzzaman', 'fazle', 'roxy'];
function perfectFriend(friendName) {
    for (const friend of friendName) {

        if (typeof friend == 'string') {
            let friendString = friend;
            if (friendString.length == 5) {
                return friendString;
            }
        }
    }
}
const smallLengthFriend = perfectFriend(friends);
console.log('The 5 Length Friend is =', smallLengthFriend);

