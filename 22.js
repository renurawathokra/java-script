let a=5;
let b=10;
let c=15;
let d=25;
    let max = a; 
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }

    console.log(`The maximum number is: ${max}`);
    return max;
