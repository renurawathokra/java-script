let str="renurawat";
str=str.split('');
console.log(str);
for(let i=0;i<str.length;i++){
    let count=1;
    for(let j=i+1;j<str.length;j++)
        {
            if(str[i]===str[j]){
                count++;
                str[j]='';
            }
        }
        console.log(count+''+str[i]);
    
}