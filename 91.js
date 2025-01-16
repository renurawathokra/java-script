let  str='madam';
let res=reverse(str);
console.log(res);
if(str===(res))
    {
        console.log("palamdrm");
      
    }
    else{
        console.log(" not palamdrm");
    }
function  reverse(str){
    let str2='';
    for(let i=str.length-1;i>=0;i--)
        {
            str2=str2+str.charAt(i);
            
        }
        return str2;
}

