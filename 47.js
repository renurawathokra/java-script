
let number = 153;

let digits = number.toString();
let numDigits = digits.length;


let sum = 0;


for (let i = 0; i < numDigits; i++) {
    let digit = parseInt(digits[i]); 
    sum += Math.pow(digit, numDigits); 
}
 

if (sum === number) {
    console.log(" an Armstrong number.");
} else {
    console.log(" not an Armstrong number.");
}
