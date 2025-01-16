let distance = 6;
    let fare;
    
    if (distance <= 5) {
        fare = distance * 10; // First 5 km at $10/km
    } else {
        fare = (5 * 10) + ((distance - 5) * 8); // First 5 km at $10/km + remaining at $8/km
    }
    
    console.log(`The taxi fare for ${distance} km is $${fare}.`);
    return fare;
