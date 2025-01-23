for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==1||i==1&&j<=4||i==3||i==5&&j<=4||j==5&&i>=2&&i<=4){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}