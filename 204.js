for(let i=1;i<=5;i++){
    for(let j=1;j<=9;j++){
        if(j-i==0 || j+i==10 || i==1){
            document.write(j);
        }else{
            document.write("1");
        }
    }
    document.write("<br>");
}