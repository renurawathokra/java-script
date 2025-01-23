for(let i=1;i<=4;i++){
    for(let j=1;j<=8;j++){
        if(j==1||i==4&&j<=4||i==2&&j>=4&&j<=8||j==4&&i>=3&&i<=4||j==8&&i>=3&&i<=4){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}