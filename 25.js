let  calculateTicketPrice = function(age, showtime) {
   
    let basePrice;
    if (age < 12) {
        basePrice = 5;  
    } else if (age >= 12 && age <= 60) {
        basePrice = 10; 
    } else {
        basePrice = 7;  
    }
    if (showTime >=18 && showTime <= 22) {
        basePrice += 2;  
    }

    return basePrice;
}


let age = parseInt(prompt("Enter your age: "));
let showTime = parseInt(prompt("show time in 24-hour format (e.g., 18 for 6 PM): "));


let ticketPrice = calculateTicketPrice(age, showTime);
alert("The ticket price is $" + ticketPrice + ".");
