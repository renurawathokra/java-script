let s=4;
let star=1;
for(let i=1;i<=5;i++){
    for(let j=1;j<=s;j++){
        document.write('&nbsp ');
    }
    s--;
    for(let j=1;j<=star;j++){
        document.write('*');
    }
    star+=2;
    document.write('<br>');
}