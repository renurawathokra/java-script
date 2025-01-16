let  Amount = 100;
let Ratio = "3:2";
let plitnum = Ratio.split(':').map(Number);
let plit=plitnum.reduce((sum,value)=>sum+value,0);

let Split=plitnum.map(i=>(i/plit)*Amount);
console.log("Split [0]:", +Split[0]);
console.log("Split [1]:", +Split[1]);


