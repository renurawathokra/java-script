let Number = 45,temp,sqr ;
let a=0;c=1 ;sum=0;
sqr=n*n;
temp=n;
while(temp>0){
    c=c*10;
    temp=parseInt(temp/10);

}
a=parseInt(sqr%c);
b=parseInt(sqr/c);
if(sum==n){
    console.log("kapar number");

}else{
    console.log("not kapar number");

}
