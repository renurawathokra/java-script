let a=0,b=1,c=0;
let n=5;
console.log(a);
console.log(b);

fibbo(n);
function fibbo(n){
    if(n>0){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
        fibbo(n-1);
    }
}