for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==1||i==1||i==5){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}