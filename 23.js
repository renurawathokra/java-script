let character = 'a';  {
    
    character = character.toLowerCase();
    if (/[a-z]/i.test(character)) {
        if ('aeiou'.includes(character)) {
            console.log(`${character} is a vowel.`);
        } else {
            console.log(`${character} is a consonant.`);
        }
    } else {
        console.log(" valid alphabet letter.");
    }
}