let str="hello renu";
let char=str.split('');
let vowal=0;
for(let i=0;i<=10;i++){
    if(char[i]=='a'||char[i]=='e'||char[i]=='o'||char[i]=='u'||char[i]=='i'){
        vowal++;
    }
    
}
console.log(vowal);