
function convertMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;         
    console.log(`${totalMinutes} minutes is equal to ${hours} hours and ${minutes} minutes.`);

convertMinutes(135); 
}