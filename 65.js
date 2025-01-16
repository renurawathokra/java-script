function fact(n) {
    let factorial = 1;
    while (n > 0) {
        factorial *= n;
        n--;            
    }
    return factorial;
}

let n = 5; 
console.log(fact(n)); 