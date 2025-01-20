let str = "123456";
let isonlydigits = true;

for (let i = 0; i < str.length; i++) {
  if (str[i] < '0' || str[i] > '9') { 
    isonlydigits = false;
    break; 
  }
}

if (isonlydigits && str.length > 0) {
  console.log("This string contains only digits");
} else {
  console.log("This string  not contain only digits");
}