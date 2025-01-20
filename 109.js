let truncatestring=(str,length)=>{
    if(str.length<=length){
        return str;

    }
    return str.slice(0,length)+'...';
};
var re=truncatestring('hello',3);
console.log(re);