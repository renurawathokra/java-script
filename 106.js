function removePunctuation(input) {
    const punctuation = ".,!?;:'\"()[]{}<>-_/\\@#%^&*~`|+=`";

    let result = "";
punctuation
    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        let isPunctuation = false;
        for (let j = 0; j < punctuation.length; j++) {
            if (char === punctuation[j]) {
                isPunctuation = true;
                break;
            }
        }

        if (!isPunctuation) {
            result += char;
        }
    }

    return result;
}const inputString = "Hello, world! How's everything?";
console.log(removePunctuation(inputString)); 

