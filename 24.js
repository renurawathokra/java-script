let age = 20;
let isCitizen = true; 

const minimumAge = 18;

let eligible = checkEligibilityToVote(age, isCitizen); {
  if (age >= minimumAge && isCitizen) {
    console.log("You  eligible to vote.");
  } else {
    console.log("You  not eligible to vote.");
  }
}
console.log(eligiblevote(age, isCitizen));

