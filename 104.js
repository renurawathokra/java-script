
let str = 'abc';
for (let i = 0; i < str.length; i++) {
    let char='';
    for (let j = i; j <str.length; j++) {
        char+=str.charAt(j);
        console.log(char);
    }
}
