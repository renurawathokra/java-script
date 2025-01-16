let n=1234;
let sumofdiget=0;
let rem;
while(n>0){
    rem=persint(n%10)
    sumofdiget=sumofdiget+rem;
    n=parseInt(n/10);

}
console.log(sumofdiget);
