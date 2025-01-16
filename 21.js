let a, b, c ;
    if (a<=0||b<=0||c<=0) {
        console.log("Invalid  lengths.  sides  greater than 0.");
    } else if (a+b>c&&a+c>b&&b+c>a) { 
        if (a===b &&b===c) {
            console.log("The triangle is Equilateral.");
        } else if (a===b||b===c||a=== c) {
            console.log(" triangle is Isosceles.");
        } else {
            console.log(" triangle is Scalene.");
        }
    } else {
        console.log("  lengths  not  triangle.");
    }
