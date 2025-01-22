function Converter(str){
    if(typeof str !="string"){
        throw new Error('Enter only string');
    }
    return str.toUpperCase();  
}
try{
let str='sanju';
let res=Converter(str);
console.log(res);
}catch(e){
    console.log(e.message);
}