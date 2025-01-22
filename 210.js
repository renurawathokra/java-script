for(let i=1;i<=5;i++){
    for(let j=1;j<=9;j++){
        if(i+j==6||j-i==4||i==3&&j>=3&&j<=7){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}