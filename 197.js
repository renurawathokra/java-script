let s=4;
for(let i=1;i<=5;i++){
    for(let j=1;j<=s;j++){
        document.write('&nbsp ');
    }
    s--;
    for(let j=1;j<=i;j++){
        document.write(j);
    }
    document.write('<br>');
}