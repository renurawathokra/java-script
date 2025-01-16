function classify(age) {
    if (age >= 0 && age <= 12) {
        console.log("The person is a Child.");
    } else if (age >= 13 && age <= 19) {
        console.log("The person is a Teenager.");
    } else if (age >= 20 && age <= 59) {
        console.log("The person is an Adult.");
    } else if (age >= 60) {
        console.log("The person is a Senior Citizen.");
    } else {
        console.log("Invalid age entered.");
    }
}