for(let i=1;i<=9;i++){
    for(let j=1;j<=9;j++){
        if(i+j==6 || j-i==4 || i+j==15 ||i-j==4){
            document.write("*");
        }else{
            document.write("&nbsp ");
        }
    }
    document.write("<br>");
}