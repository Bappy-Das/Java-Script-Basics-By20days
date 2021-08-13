// object declaration 
var friends = {
    name: 'chandan',
    age: 25,
    dateOfBirth: 1994
};

var mobile = {
    brand: 'xiomi',
    ram: '4gb',
    screenSize: 5
}
// get object property value 

// console.log(mobile);
// console.log("This is get an object property:", mobile.brand);
// var mobileBrand = mobile.brand;
// console.log('this is mobile brand of object property: ', mobileBrand);


// set an object property value 
// 1st way
mobile.brand = "apple";
console.log("after change the value xiomi to apple : ", mobile.brand);

// 2nd way
mobile["brand"] = "samsung";
console.log("after change the value apple to sumsung : ", mobile.brand);

// 3rd way 
var brandName = "brand";
mobile[brandName] = 'relme';
console.log("after change the value sumsung to relme : ", mobile.brand);
