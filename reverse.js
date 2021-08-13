const greeting = "Hello Its Night";

function reverseString(txt) {
    let reverse = " ";
    for (const text of txt) {
        // console.log(text);
        reverse = text + reverse;
    }
    return reverse;
}
const result = reverseString(greeting);
console.log(result);