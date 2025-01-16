let num = 28; 
let sum = 0;


for (let i = 1; i <= Math.floor(num / 2); i++) {
  if (num % i === 0) {
    sum += i;
  }
}

if (sum === num && num > 1) {
  console.log("  perfect number.");
} else {
  console.log("  not a perfect number.");
}
