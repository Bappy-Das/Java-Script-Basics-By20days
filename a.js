let nums = [
    { name: 'bappy', age: '27', home: 'brahmanbaria' },
    { name: 'chandan', age: '30', home: 'brahmanbaria' },
    { name: 'subrata', age: '20', home: 'brahmanbaria' },
    { name: 'hridoy', age: '17', home: 'brahmanbaria' }
];
let smallAge = nums[0];
for (const num of nums) {
    if (num.age < smallAge.age) {
        smallAge = num;
    }
}
console.log(smallAge);

