let number = 121; 
let originalNumber = number;

while (number > 0) {
    let lastDigit = number % 10; 
    reversedNumber = reversedNumber * 10 + lastDigit; 
    number = Math.floor(number / 10); 
}


if (originalNumber === reversedNumber) {
    console.log(" palindrome.");
} else {
    console.log("not a palindrome.");
}
