for (let i = 0; i <= 5; i++) {
    for (let j = 1; j <= 9; j++) {
        if (i == 0) {
            document.write(j);
        } else if (j == i || j == 10 - i) {
            document.write("1"); 
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}