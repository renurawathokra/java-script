for(let i=1;i<=6;i++){
    for(let j=1;j<=6;j++){
         if(j==1&&i>=2&&i<=4||i==1&&j>=2&&j<=4||i==5&&j>=2&&j<=4||j==5&&i>=2&&i<=4||i==4&&j<=3&&j>=3||i==6&&j<=5&&j>=5){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}