let Number1 = 8;
let Number2 = 16;
let n1;
let n2;
let c=(Number1>Number2)?Number1:Number2;
for(let i=1;i<c;i++){
    if(Number1%i==0&&Number2%i==0){
        n1=Number1/i;
        n2=Number2/i;
    }
}
console.log(n1);
console.log(n2);

