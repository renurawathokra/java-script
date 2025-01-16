let n=18;
let sumofdiget=0;
let rem;
while(n>0){
    rem=(n%10);
    sumofdiget+sumofdiget+rem;
    n=(n/10);


}
if(n%sumofdiget==0){
    console.log("divisible");

}else
{ console.log("not divisible");

}